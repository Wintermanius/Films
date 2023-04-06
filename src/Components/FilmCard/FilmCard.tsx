import { FC } from "react"
import { Films } from "../../types/films"

type FilmCardProps = {
  films: Films
}

const FilmCard: FC<FilmCardProps> = ({films}) => {
  const {title, poster} = films
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={poster} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}</a>
      </h3>
    </article>
  )
}

export default FilmCard
