import { FC, useState } from "react";
import OneStar from "../../OneStar/OneStar";

type RatingProps = {
  onChangeRating: (rating: number) => void
}

const Rating: FC<RatingProps> = ({onChangeRating}) => {
  const [active, setActive] = useState<number>(0)
  
  return (
  <>
    {Array(10).fill('').map((_, index) => <OneStar checked={active === index + 1} onChange={(r) => { 
      setActive(r)
      onChangeRating(r)
    }} key={index} stars={{
      id: `star-${index + 1}`,
      value: `${index + 1}`,
      rating: index + 1,
      star: `star-${index + 1}`
    }} />).reverse()}
  </>
  )
}

export default Rating