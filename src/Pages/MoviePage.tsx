import { FC, useEffect, useState } from "react"
import Header from "../Components/Header/Header"
import { Link, useParams } from "react-router-dom"
import { FilmType } from "../types/film-type"
import FilmList from "../Components/FilmList/FilmList"
import { changeStatusFx, fetchFavoriteFx, fetchReviewsFx, fetchSimilarFilmsFx } from "../store/api"
import { useStore, useUnit } from "effector-react"
import { $favoriteFilms, $films, $reviews, $similarFilms } from "../store/store"
import { UserType } from "../types/userType"
import Details from "../Components/Details/Details"
import Overview from "../Components/Overview/Overview"
import ReviewList from "../Components/Reviews/ReviewList"
import styled from "styled-components"

const LinkStyled = styled(Link)`
  width: 100px;
  text-align: center;
  &[href] {
      &:focus {
        font-weight: bold;
        text-shadow: 0 0 .9px #DFCF77, 0 0 .9px #DFCF77, 0 0 .9px #DFCF77;
        ::after {
          display: block;
        }
      }
  }
`

type MoviePageProps = {
  films: FilmType[]
  user?: UserType | null
}

const MoviePage: FC<MoviePageProps> = ({films, user}) => {
  const params = useParams()
  const similarFilms = useUnit($similarFilms)
  
  const film = films.length ? films.find((film) => (film.id === Number(params.id))) : null

  useEffect(() => {
    fetchSimilarFilmsFx({ filmId: Number(params.id) })
    fetchReviewsFx({ filmId: Number(params.id) })
  }, [params.id])

  const reviews1 = useStore($reviews)

  const [overview, setOverview] = useState<boolean>(true)
  const [details, setDetails] = useState<boolean>(false)
  const [reviews, setReviews] = useState<boolean>(false)

  const getOverview = () => {setOverview(true); setDetails(false); setReviews(false)}
  const getDetails = () => {setDetails(true); setOverview(false); setReviews(false)}
  const getReviews = () => {setReviews(true); setOverview(false); setDetails(false)}
  
  const changeStatus = (value: boolean) => {
    if (film) {
      changeStatusFx({filmId: film.id, status: value ? 1 : 0})
    }
  }
  
  const favoriteFilms = useUnit($favoriteFilms)

  useEffect(() => {
    fetchFavoriteFx()
  }, [favoriteFilms])

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

            <Header user={user} />

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{film.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{film.genre}</span>
                  <span className="film-card__year">{film.released}</span>
                </p>

                <div className="film-card__buttons">

                  <Link to={`/player/${film.id}`} className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </Link>

                  {user ? <button onClick={() => changeStatus(!film.isFavorite)} className="btn btn--list film-card__button" type="button">
                    {film.isFavorite ? 
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#in-list"></use>
                      </svg> : 
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>}
                    <span>My list</span>
                    <span className="film-card__count">{favoriteFilms.length}</span>
                  </button> :
                  <Link to='/login' onClick={() => changeStatus(!film.isFavorite)} className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                    <span className="film-card__count"></span>
                  </Link>}

                  {user ? <Link to={`/films/${params.id}/review`} className="btn film-card__button">Add review</Link> :
                    <Link to='/login' className="btn film-card__button">Add review</Link>}
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
                    <li className="film-nav__item">
                      <LinkStyled to="#" className="film-nav__link" onClick={getOverview}>Overview</LinkStyled>
                    </li>
                    <li className="film-nav__item">
                      <LinkStyled to="#" className="film-nav__link" onClick={getDetails}>Details</LinkStyled>
                    </li>
                    <li className="film-nav__item">
                      <LinkStyled to="#" className="film-nav__link" onClick={getReviews}>Reviews</LinkStyled>
                    </li>
                  </ul>
                </nav>

                {overview && <Overview film={film} />}
                {details && <Details film={film} />}
                {reviews && <ReviewList reviews={reviews1} />}
                
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
