import { FC } from "react"
import styled, { css } from "styled-components"
import { FilmType } from "../../types/film-type"
import { Link } from "react-router-dom"

const SpanStyled = styled.span<{ active: boolean }>`
  margin-right: 20px;
  margin-bottom: 20px;
  ${(props) => props.active && css`
    text-shadow: 0 0 .9px #DFCF77, 0 0 .9px #DFCF77, 0 0 .9px #DFCF77;
    &::after {
      display: block;
    }
  `};
  cursor: pointer;
`

type CatalogGenresProps = {
  activeGenre: string
  films: FilmType[]
  onClickGenre?: (genre: string) => void
}

const CatalogGenres: FC<CatalogGenresProps> = ({activeGenre, onClickGenre, films}) => {

  const filmsGenres = films.map((film) => film.genre)
  const filteredFilmsGenres = Array.from(new Set(filmsGenres))

  return (
    <>
      { filteredFilmsGenres.map((item) => 
      <li className="catalog__genres-item" key={item}>
        <SpanStyled active={item === activeGenre} className="catalog__genres-link" onClick={() => onClickGenre && onClickGenre(item)}>{item}</SpanStyled>
      </li>) }
    </>
  )
}

export default CatalogGenres
