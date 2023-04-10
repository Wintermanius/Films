import { FC } from "react"
import { FilmType } from "../../types/film-type"
import FilmCard from "../FilmCard/FilmCard"

type FilmListProps = {
  films: FilmType[]
}

const FilmList: FC<FilmListProps> = ({ films }) => {
  return (
    <>
      { films.map((film) => <FilmCard key={film.id} film={film} />) }
    </>
  )
}

export default FilmList
