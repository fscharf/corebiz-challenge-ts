import { ProductController } from 'controllers/product'
import { IProduct } from 'models/product'
import { createContext, useCallback, useEffect, useState } from 'react'
import { useDebounce } from 'usehooks-ts'
import { removeSymbols } from 'utils/string'

type Props = {
  productController: ProductController
} & React.PropsWithChildren

type State = {
  products: IProduct[]
  isLoading: boolean
  searchValue: string
  handleSearchValue: (query: string) => void
}

export const ProductContext = createContext({} as State)

export const ProductProvider = ({ children, productController }: Props) => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const debouncedSearchValue = useDebounce(searchValue, 500)

  const search = useCallback(async () => {
    setIsLoading(true)
    const products = await productController.getProducts()
    const filteredProducts: IProduct[] = products.filter(product =>
      removeSymbols(product.productName)
        .toLowerCase()
        .includes(removeSymbols(debouncedSearchValue).toLowerCase())
    )
    setProducts([...filteredProducts])
    setIsLoading(false)
  }, [productController, debouncedSearchValue])

  useEffect(() => {
    search()
  }, [search])

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true)
      const products = await productController.getProducts()
      setProducts([...products])
      setIsLoading(false)
    }
    getProducts()
  }, [productController])

  const handleSearchValue = (searchValue: string) => setSearchValue(searchValue)

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        handleSearchValue,
        searchValue
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
