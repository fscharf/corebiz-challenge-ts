import { HiOutlineStar, HiStar } from 'react-icons/hi2'

type Props = {
  rating: number
}

const Rating = ({ rating }: Props) => {
  const maxStars: number = 5

  return (
    <div className="flex gap-1 py-2">
      {Array.from({ length: maxStars }).map((_, index) => {
        return rating >= index + 1 ? (
          <HiStar key={index} className="fill-red-500" />
        ) : (
          <HiOutlineStar key={index} className="stroke-red-500" />
        )
      })}
    </div>
  )
}

export default Rating
