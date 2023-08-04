import products from 'data/products.json'
import { IProduct } from 'models/product'

interface IProductService {
  getProducts(): Promise<IProduct[]>
}

export class ProductService implements IProductService {
  public async getProducts(): Promise<IProduct[]> {
    // return await httpClient.get('/products')
    return products as IProduct[]
  }
}
