import { FC } from "react"
import styled from "styled-components"
import { FilmType } from "../../types/film-type"
import { Link } from "react-router-dom"

const SpanStyled = styled(Link)`
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

type CatalogGenresProps = {
  films: FilmType[]
  onClickGenre?: (genre: string) => void
}

const CatalogGenres: FC<CatalogGenresProps> = ({onClickGenre, films}) => {

  const filmsGenres = films.map((film) => film.genre)
  const filteredFilmsGenres = Array.from(new Set(filmsGenres))

  return (
    <>
      { filteredFilmsGenres.map((item) => 
      <li className="catalog__genres-item" key={item}>
        <SpanStyled to='#' className="catalog__genres-link" onClick={() => onClickGenre && onClickGenre(item)}>{item}</SpanStyled>
      </li>) }
    </>
  )
}

export default CatalogGenres
