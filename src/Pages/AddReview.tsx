import { FC } from "react"
import { Link, useParams } from "react-router-dom"
import Logo from "../Components/Logo/Logo"
import CommentForm from "../Components/CommentForm/CommentForm"
import Avatar from "../assets/img/avatar.jpg"
import { FilmType } from "../types/film-type"

type AddReviewProps = {
  films: FilmType[]
}

const AddReview: FC<AddReviewProps> = ({films}) => {

  const params = useParams()

  const film = films.length ? films.find((film) => (film.id === Number(params.id))) : null
  

  return (
    <>
      {film && <>
        <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src= {film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="film-page.html" className="breadcrumbs__link">{film.name}</a>
                </li>
                <li className="breadcrumbs__item">
                  <Link to="/review" className="breadcrumbs__link">Add review</Link>
                </li>
              </ul>
            </nav>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src={Avatar} alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={film.posterImage} alt={film.name + 'poster'} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <CommentForm />
        </div>

      </section>
      </>}
    </>
  )
}

export default AddReview
