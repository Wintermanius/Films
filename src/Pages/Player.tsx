import { FC } from "react"
import { FilmType } from "../types/film-type"
import { useParams } from "react-router-dom"

type PlayerProps = {
  films: FilmType[]
}

const Player: FC<PlayerProps> = ({films}) => {

  const params = useParams()

  const film = films.length ? films.find((film) => (film.id === Number(params.id))) : null

  return (
    <>
      {film && <>
        <div className="player">
        <video controls src={film.videoLink} className="player__video" poster={film.previewImage} ></video>
      </div>
      </>}
    </>
  )
}

export default Player
