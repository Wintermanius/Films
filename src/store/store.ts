import { createEvent, createStore, sample } from "effector";
import { fetchFilmsFx, fetchOneFilmFx } from "./api";
import { FilmType } from "../types/film-type";

export const $films = createStore<FilmType[]>([])
$films.on(fetchFilmsFx.doneData, (_, result) => result)

export const $film = createStore<FilmType | null>(null)
$film.on(fetchOneFilmFx.doneData, (_, result) => result)
