import { FC } from "react"
import { RatingType } from "../../types/rating-type"

type OneStarProps = {
  checked: boolean
  stars: RatingType
  onChange: (rating: number) => void
}

const OneStar: FC<OneStarProps> = ({checked, stars, onChange}) => {
  const {id, value, rating} = stars

  return (
    <>
      <input className="rating__input" 
        id={id} 
        type="radio" 
        name="rating"
        checked={checked}
        value={value}
      />
      <label className="rating__label" onClick={() => onChange(rating)}>Rating {rating}</label>
    </>
  )
}

export default OneStar
