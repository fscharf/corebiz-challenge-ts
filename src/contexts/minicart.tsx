import { IProduct } from 'models/product'
import { createContext, useCallback, useEffect } from 'react'
import { useLocalStorage } from 'usehooks-ts'

type State = {
  total: number
  addProduct: (product: IProduct) => void
  removeProduct: (productId: number) => void
  products: IProduct[]
}

export const MinicartContext = createContext({} as State)

export const MinicartProvider = ({ children }: React.PropsWithChildren) => {
  const [total, setTotal] = useLocalStorage<number>('minicart:total', 0)
  const [products, setProducts] = useLocalStorage<IProduct[]>(
    'minicart:products',
    []
  )

  const addProduct = (product: IProduct) => {
    const filteredProducts = products.filter(
      currentProduct => currentProduct.productId !== product.productId
    )

    setProducts([...filteredProducts, product])
  }

  const removeProduct = (productId: number) => {
    setProducts(products.filter(product => product.productId !== productId))
  }

  const handleTotal = useCallback(() => {
    const total = products.reduce((total, product) => total + product.price, 0)
    setTotal(total)
  }, [products, setTotal])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleTotal, [products.length])

  return (
    <MinicartContext.Provider
      value={{
        total,
        products,
        addProduct,
        removeProduct
      }}
    >
      {children}
    </MinicartContext.Provider>
  )
}
