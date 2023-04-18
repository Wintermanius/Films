import { FC, useEffect, useState } from "react"
import Header from "../Components/Header/Header"
import { Link, useParams } from "react-router-dom"
import { FilmType } from "../types/film-type"
import FilmList from "../Components/FilmList/FilmList"
import { fetchSimilarFilmsFx } from "../store/api"
import { useUnit } from "effector-react"
import { $similarFilms } from "../store/store"

type MoviePageProps = {
  films: FilmType[]
}

const MoviePage: FC<MoviePageProps> = ({films}) => {
  const params = useParams()
  console.log(params)
  const similarFilms = useUnit($similarFilms)
  
  const film = films.length ? films.find((film) => (film.id === Number(params.id))) : null

  useEffect(() => {
    fetchSimilarFilmsFx({ filmId: Number(params.id) })
  }, [params.id])

  return (
    <>
      {film && 
      <>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={film.backgroundImage} alt={film.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header />

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{film.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{film.genre}</span>
                  <span className="film-card__year">{film.released}</span>
                </p>

                <div className="film-card__buttons">
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                    <span className="film-card__count">9</span>
                  </button>
                  <Link to="/review" className="btn film-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={film.posterImage} alt={film.name + 'poster'} width="218" height="327" />
              </div>

              <div className="film-card__desc">
                <nav className="film-nav film-card__nav">
                  <ul className="film-nav__list">
                    <li className="film-nav__item film-nav__item--active">
                      <a href="#" className="film-nav__link">Overview</a>
                    </li>
                    <li className="film-nav__item">
                      <a href="#" className="film-nav__link">Details</a>
                    </li>
                    <li className="film-nav__item">
                      <a href="#" className="film-nav__link">Reviews</a>
                    </li>
                  </ul>
                </nav>

                <div className="film-rating">
                  <div className="film-rating__score">{film.rating}</div>
                  <p className="film-rating__meta">
                    <span className="film-rating__level">Very good</span>
                    <span className="film-rating__count">240 ratings</span>
                  </p>
                </div>

                <div className="film-card__text">
        
                  {film.description}

                  <p className="film-card__director"><strong>Director: {film.director}</strong></p>

                  <p className="film-card__starring"><strong>Starring: {film.starring[0] + ', ' + film.starring[1] + ', ' + film.starring[2]} and other</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__films-list">
              <FilmList films={similarFilms} />
            </div>
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </>
      }
    </>
  )
}

export default MoviePage
