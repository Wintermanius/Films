import { FC } from "react"
import "../assets/css/main.css"
import { FilmType } from "../types/film-type"
import FilmCardWrap from "../Components/FilmCardWrap/FilmCardWrap"
import FilterFilms from "../Components/FilterFilms/FilterFilms"


type MainScreenProps = {
  film1: FilmType | null
  films1: FilmType[]
}

const MainScreen: FC<MainScreenProps> = ({film1, films1}) => { 

  return (
    <>
      <section className="film-card">
        {film1 && <FilmCardWrap film={film1} />}
      </section>
      <FilterFilms films={films1} />
    </>
  )
}

export default MainScreen
