import { FC, useState } from "react"
import FilmList from "../FilmList/FilmList"
import { FilmType } from "../../types/film-type"
import { Link } from "react-router-dom"
import styled from "styled-components"
import CatalogGenresItem from "../CatalogGenres/CatalogGenres"

const SpanStyled = styled.span`
  margin-right: 20px;
  margin-bottom: 20px;
  &[href] {
      &:focus {
        text-shadow: 0 0 .9px #DFCF77, 0 0 .9px #DFCF77, 0 0 .9px #DFCF77;
        ::after {
          display: block;
        }
      }
  }
  cursor: pointer;
`
const UL = styled.ul`
  justify-content: space-between
`

type FilterFilmsProps = {
  films: FilmType[]
}

const FilterFilms: FC<FilterFilmsProps> = ({films }) => {

  const [filmGenre, setFilmGenre] = useState<string>()

  const genreFilmsList = films.filter(film => filmGenre ? film.genre === filmGenre : film.genre === film.genre)

  
  return (
    <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <UL className="catalog__genres-list">
            <li className="catalog__genres-item" onClick={() => setFilmGenre('')}>
              <SpanStyled className="catalog__genres-link">All genres</SpanStyled>
            </li>
            <CatalogGenresItem films={films} onClickGenre={setFilmGenre} />
          </UL>

          <div className="catalog__films-list">
            <FilmList films={genreFilmsList}  />
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
      </div>
  )
}

export default FilterFilms
