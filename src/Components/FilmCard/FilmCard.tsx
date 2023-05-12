import { FC, MouseEvent, useState } from "react"
import { FilmType } from "../../types/film-type"
import VideoPlayer from "../PreviewVideoPlayer/PreviewVideoPlayer"
import { Link } from "react-router-dom"

type FilmCardProps = {
  film: FilmType
}

const FilmCard: FC<FilmCardProps> = ({ film }) => {
  const [isPlay, setIsPlay] = useState<boolean>(false)
  const { name, id } = film

  function onMouseOverHandler(e: MouseEvent) {
    setIsPlay(true)
  }

  function onMouseOutHandler() {
    setIsPlay(false)
  }

  return (
    <article onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler} className="small-film-card catalog__films-card" key = {id}>
      <div className="small-film-card__image">
        <VideoPlayer isPlay={isPlay} films={film} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  )
}

export default FilmCard
