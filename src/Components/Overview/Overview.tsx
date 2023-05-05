import { FC } from "react"
import { FilmType } from "../../types/film-type"

const ratingInGrade: { [key: number]: string } = {
  0: 'Bad',
  1: 'Bad',
  2: 'Bad',
  3: 'Normal',
  4: 'Normal',
  5: 'Good',
  6: 'Good',
  7: 'Good',
  8: 'Very good',
  9: 'Very good',
  10: 'Awesome',
}

type OverviewProps = {
  film: FilmType
}

const Overview: FC<OverviewProps> = ({film}) => {

  const {rating, director, starring, scoresCount} = film
  const actors = starring.map((item) => item + ', ')

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingInGrade[Math.floor(rating)]}</span>
          <span className="film-rating__count">{scoresCount} Ratings</span>
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
