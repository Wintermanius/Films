import { createEffect } from "effector";
import { FilmType } from "../types/film-type";

export const fetchFilmsFx = createEffect(async () => {
  const response = await fetch('https://11.react.pages.academy/wtw/films')
  const result = await response.json()
  return result
})

export const fetchOneFilmFx = createEffect(async () => {
  const response = await fetch('https://11.react.pages.academy/wtw/promo')
  const result = await response.json()
  return result
})

export const fetchSimilarFilmsFx = createEffect<{ filmId: number }, FilmType[], Error>(async ({ filmId: filmId}) => {
  const response = await fetch(`https://11.react.pages.academy/wtw/films/${filmId}/similar`)
  const result = await response.json()
  return result
})
