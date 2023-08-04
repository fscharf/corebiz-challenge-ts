import { ProductController } from 'controllers/product'
import { IProduct } from 'models/product'
import { createContext, useEffect, useState } from 'react'

type Props = {
  productController: ProductController
} & React.PropsWithChildren

type State = {
  products: IProduct[]
  isLoading: boolean
}

export const ProductContext = createContext({} as State)

export const ProductProvider = ({ children, productController }: Props) => {
  const [products, setProducts] = useState<IProduct[]>([])

  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    productController
      .getProducts()
      .then(setProducts)
      .finally(() => setIsLoading(false))
  }, [productController])

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
