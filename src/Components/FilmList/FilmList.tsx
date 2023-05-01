import { FC, useState } from "react"
import { FilmType } from "../../types/film-type"
import FilmCard from "../FilmCard/FilmCard"

type FilmListProps = {
  films: FilmType[]
}

const FilmList: FC<FilmListProps> = ({ films }) => {
  const [filmsLength, setFilmsLength] = useState<number>(8)
  console.log(filmsLength)
  
  return (
    <>
      <div className="catalog__films-list">
        { films.filter((_, index) => index + 1 < filmsLength).map((film) => <FilmCard key={film.id} film={film} />) }
      </div>
      
      {filmsLength < 25 ?<div className="catalog__more">
        <button onClick={() => setFilmsLength(filmsLength + 8)} className="catalog__button" type="button">Show more</button>
      </div> : null}
    </>
  )
}

export default FilmList
