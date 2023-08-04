import { MinicartProvider } from 'contexts/minicart'
import { NewsletterProvider } from 'contexts/newsletter'
import { ProductProvider } from 'contexts/product'
import { NewsletterController } from 'controllers/newsletter'
import { ProductController } from 'controllers/product'
import React from 'react'
import { Footer, Header } from '.'

const PageWrapper = ({ children }: React.PropsWithChildren) => {
  const productController: ProductController = new ProductController()
  const newsletterController: NewsletterController = new NewsletterController()

  return (
    <ProductProvider productController={productController}>
      <NewsletterProvider newsletterController={newsletterController}>
        <MinicartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </MinicartProvider>
      </NewsletterProvider>
    </ProductProvider>
  )
}

export default PageWrapper
