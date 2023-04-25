import { FC } from "react"
import "../assets/css/main.css"
import { FilmType } from "../types/film-type"
import FilmCardWrap from "../Components/FilmCardWrap/FilmCardWrap"
import FilterFilms from "../Components/FilterFilms/FilterFilms"
import { UserType } from "../types/userType"


type MainScreenProps = {
  film: FilmType | null
  films: FilmType[]
  user?: UserType | null
}

const MainScreen: FC<MainScreenProps> = ({film, films, user}) => { 

  return (
    <>
      <section className="film-card">
        {film && <FilmCardWrap user={user} film={film} />}
      </section>
      <FilterFilms films={films} />
    </>
  )
}

export default MainScreen
