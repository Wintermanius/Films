import { FC } from "react"
import { FilmType } from "../../types/film-type"

type OverviewProps = {
  film: FilmType
}

const Overview: FC<OverviewProps> = ({film}) => {

  const {rating, director, starring} = film
  const actors = starring.map((item) => item + ', ')

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {film.description}
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {actors} and other</strong></p>
      </div>
    </>
  )
}

export default Overview
