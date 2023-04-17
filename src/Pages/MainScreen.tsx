import { FC, useEffect } from "react"
import "../assets/css/main.css"
import Header from "../Components/Header/Header"
import { FilmType } from "../types/film-type"
import FilmList from "../Components/FilmList/FilmList"
import { useStore } from "effector-react"
import { $film, $films } from "../store/store"
import { fetchFilmsFx, fetchOneFilmFx } from "../store/api"
import FilmCardWrap from "../Components/FilmCardWrap/FilmCardWrap"


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

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            <FilmList films={films1}  />
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
      </div>
    </>
  )
}

export default MainScreen
