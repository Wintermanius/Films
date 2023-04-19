import { FC } from "react"
import { FilmType } from "../../types/film-type"
import Header from "../Header/Header"
import { Link } from "react-router-dom"

type FilmCardWrapProps = {
  film: FilmType
}

const FilmCardWrap: FC<FilmCardWrapProps> = ({film}) => {

  const {posterImage, name, genre, released, backgroundImage, id } = film

  return (
    <>
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt={name + 'poster'} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>

            <div className="film-card__buttons">

             <Link to={`/player/${id}`} className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>

              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
                <span className="film-card__count">9</span>
              </button>

            </div>
          </div>
        </div>
      </div>    
    </>
  )
}

export default FilmCardWrap
