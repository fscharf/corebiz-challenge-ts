import { IProduct } from 'models/product'
import { ProductService } from 'services/product'

export class ProductController {
  private productService: ProductService

  constructor() {
    this.productService = new ProductService()
  }

  public async getProducts(): Promise<IProduct[]> {
    return await this.productService.getProducts()
  }
}
