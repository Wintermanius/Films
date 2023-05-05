import { FC, useEffect, useState } from "react"
import { FilmType } from "../../types/film-type"
import Header from "../Header/Header"
import { Link } from "react-router-dom"
import { UserType } from "../../types/userType"
import { changeStatusFx, fetchFavoriteFx } from "../../store/api"
import { useUnit } from "effector-react"
import { $favoriteFilms } from "../../store/store"

type FilmCardWrapProps = {
  film: FilmType
  user?: UserType | null
}

const FilmCardWrap: FC<FilmCardWrapProps> = ({film, user}) => {

  const {posterImage, name, genre, released, backgroundImage, id, isFavorite} = film

  const changeStatus = (value: boolean) => {
    changeStatusFx({filmId: id, status: value ? 1 : 0})
  }

  const favoriteFilms = useUnit($favoriteFilms)

  useEffect(() => {
    fetchFavoriteFx()
  }, [favoriteFilms])

  return (
    <>
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header user={user} />

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

              {user ?
                <button className="btn btn--list film-card__button" type="button" onClick={() => changeStatus(!isFavorite)}>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{favoriteFilms.length}</span>
                </button> : 
                <Link to='/login' className="btn btn--list film-card__button" type="button" onClick={() => changeStatus(!isFavorite)}>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count"></span>
                </Link>}

            </div>
          </div>
        </div>
      </div>    
    </>
  )
}

export default FilmCardWrap
