import { createEvent, createStore, sample } from "effector";
import { fetchFilmsFx, loginFx, fetchPromoFilmFx, fetchSimilarFilmsFx, fetchUserFx } from "./api";
import { FilmType } from "../types/film-type";
import { UserType } from "../types/userType";
import { debug } from "patronum";

export const $films = createStore<FilmType[]>([])
$films.on(fetchFilmsFx.doneData, (_, films) => films)

export const $film = createStore<FilmType | null>(null)
$film.on(fetchPromoFilmFx.doneData, (_, result) => result)

export const $similarFilms = createStore<FilmType[]>([]).on(fetchSimilarFilmsFx.doneData, (_, films) => films)

export const $user = createStore<UserType | null>(null).on([loginFx.doneData, fetchUserFx.doneData], (_, user) => user)

// .reset(logoutFx.done)
debug($user)
