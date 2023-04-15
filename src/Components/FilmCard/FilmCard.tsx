import { FC, MouseEvent, useRef, useState } from "react"
import { FilmType } from "../../types/film-type"
import VideoPlayer from "../VideoPlayer/VideoPlayer"

type FilmCardProps = {
  film: FilmType
}

const FilmCard: FC<FilmCardProps> = ({ film }) => {
  const [isPlay, setIsPlay] = useState<boolean>(false)
  const { title, poster, id, video } = film


  const videoRef = useRef(null)

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
        <a className="small-film-card__link" href="film-page.html">{title}</a>
      </h3>
    </article>
  )
}

export default FilmCard
