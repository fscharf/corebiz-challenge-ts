import { Slider } from 'components/core'
import { useMediaQuery } from 'usehooks-ts'

const BannerSlider = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)')

  return (
    <Slider>
      {Array.from({ length: 4 }).map(() => {
        return (
          <img
            key={Math.random()}
            src={isMobile ? '/images/banner-mobile.png' : '/images/banner.png'}
            loading="lazy"
            alt="Banner"
            className="object-cover w-full base:h-auto lg:min-h-[430px]"
          />
        )
      })}
    </Slider>
  )
}

export default BannerSlider
