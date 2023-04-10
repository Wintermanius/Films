import { FC } from "react"
import { FilmType } from "../../types/film-type"

type FilmCardProps = {
  film: FilmType
}

const FilmCard: FC<FilmCardProps> = ({ film }) => {
  const { title, poster, id } = film

  return (
  <article className="small-film-card catalog__films-card" key = {id}>
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
