import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'

import 'swiper/css'
import 'swiper/css/pagination'

const Slider = ({
  children,
  ...settings
}: React.PropsWithChildren & SwiperOptions) => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        clickable: true,
        type: 'bullets'
      }}
      slidesPerView={1}
      {...settings}
    >
      {React.Children.map(children, child =>
        !React.isValidElement(child) ? null : <SwiperSlide>{child}</SwiperSlide>
      )}
    </Swiper>
  )
}

export default Slider
