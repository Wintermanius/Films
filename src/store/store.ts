import { createEvent, createStore, sample } from "effector";
import { fetchFilmsFx, fetchOneFilmFx, fetchSimilarFilmsFx } from "./api";
import { FilmType } from "../types/film-type";

export const $films = createStore<FilmType[]>([])
$films.on(fetchFilmsFx.doneData, (_, films) => films)

export const $film = createStore<FilmType | null>(null)
$film.on(fetchOneFilmFx.doneData, (_, result) => result)

export const $similarFilms = createStore<FilmType[]>([]).on(fetchSimilarFilmsFx.doneData, (_, films) => films)
