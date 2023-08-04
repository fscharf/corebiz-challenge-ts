import { ProductContext } from 'contexts/product'
import { useContext } from 'react'

export const useProduct = () => useContext(ProductContext)
