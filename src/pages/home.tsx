import { BannerSlider } from 'components/banner'
import { Newsletter } from 'components/general'
import { ProductSection } from 'components/product'
import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
      <BannerSlider />
      <ProductSection />
      <Newsletter />
    </React.Fragment>
  )
}
