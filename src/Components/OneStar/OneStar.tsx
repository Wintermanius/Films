import { ChangeEvent, FC, useState } from "react"
import { RatingType } from "../../types/rating-type"

type OneStarProps = {
  checked: boolean
  stars: RatingType
  onChange: (id: string) => void
}

const OneStar: FC<OneStarProps> = ({checked, stars, onChange}) => {
  const {id, value, rating, star} = stars

  return (
    <>
      <input className="rating__input" 
        id={id} 
        type="radio" 
        name="rating"
        checked={checked}
        value={value}
        onChange={() => onChange(id)} />
      <label className="rating__label" onClick={() => onChange(id)}>Rating {rating}</label>
    </>
  )
}

export default OneStar
