import { FC, MouseEventHandler, useState } from "react"
import FilmList from "../FilmList/FilmList"
import { FilmType } from "../../types/film-type"
import { Link } from "react-router-dom"
import styled from "styled-components"

const LinkStyled = styled(Link)`
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
`


type GenreCatalogProps = {
  films: FilmType[]
}

const GenreCatalog: FC<GenreCatalogProps> = ({films}) => {

  const [filmGenre, setFilmGenre] = useState(String)

  let Genre = films.filter(film => filmGenre ? film.genre === filmGenre : film.genre === film.genre)

  
  return (
    <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            <li className="catalog__genres-item">
              <LinkStyled onClick={() => setFilmGenre('')} to="#" className="catalog__genres-link">All genres</LinkStyled>
            </li>
            <li className="catalog__genres-item">
              <LinkStyled onClick={() => setFilmGenre('Comedy')} to="#" className="catalog__genres-link">Comedies</LinkStyled>
            </li>
            <li className="catalog__genres-item">
              <LinkStyled onClick={() => setFilmGenre('Crime')} to="#" className="catalog__genres-link">Crime</LinkStyled>
            </li>
            <li className="catalog__genres-item">
              <LinkStyled onClick={() => setFilmGenre('Documentary')} to="#" className="catalog__genres-link">Documentary</LinkStyled>
            </li>
            <li className="catalog__genres-item">
              <LinkStyled onClick={() => setFilmGenre('Drama')} to="#" className="catalog__genres-link">Dramas</LinkStyled>
            </li>
            <li className="catalog__genres-item">
              <LinkStyled onClick={() => setFilmGenre('Horror')} to="#" className="catalog__genres-link">Horror</LinkStyled>
            </li>
            <li className="catalog__genres-item">
              <LinkStyled onClick={() => setFilmGenre('Fantasy')} to="#" className="catalog__genres-link">Kids & Family</LinkStyled>
            </li>
            <li className="catalog__genres-item">
              <LinkStyled onClick={() => setFilmGenre('Romance')} to="#" className="catalog__genres-link">Romance</LinkStyled>
            </li>
            <li className="catalog__genres-item">
              <LinkStyled onClick={() => setFilmGenre('Sci-Fi')} to="#" className="catalog__genres-link">Sci-Fi</LinkStyled>
            </li>
            <li className="catalog__genres-item">
              <LinkStyled onClick={() => setFilmGenre('Thriller')} to="#" className="catalog__genres-link">Thrillers</LinkStyled>
            </li>
          </ul>

          <div className="catalog__films-list">
            <FilmList films={Genre}  />
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
      </div>
  )
}

export default GenreCatalog
