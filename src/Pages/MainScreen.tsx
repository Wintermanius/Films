import { FC, useEffect } from "react"
import "../assets/css/main.css"
import Header from "../Components/Header/Header"
import { FilmType } from "../types/film-type"
import FilmList from "../Components/FilmList/FilmList"
import { useStore } from "effector-react"
import { $film, $films } from "../store/store"
import { fetchFilmsFx, fetchOneFilmFx } from "../store/api"
import FilmCardWrap from "../Components/FilmCardWrap/FilmCardWrap"
import GenreList from "../Components/GenreList/GenreList"


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
      <GenreList films={films1} />
    </>
  )
}

export default MainScreen
