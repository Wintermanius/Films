import { createStore } from "effector";
import { fetchFilmsFx, loginFx, fetchPromoFilmFx, fetchSimilarFilmsFx, fetchUserFx, logoutFx, fetchReviewsFx, addCommentFx, changeStatusFx, getFavoriteFx } from "./api";
import { FilmType } from "../types/film-type";
import { UserType } from "../types/userType";
import { debug } from "patronum";
import { ReviewType } from "../types/review-type";

export const $films = createStore<FilmType[]>([])
$films.on(fetchFilmsFx.doneData, (_, films) => films).on(changeStatusFx.doneData, (films, film) => films.map((item) => item.id === film.id ? film : item))

export const $film = createStore<FilmType | null>(null)
$film.on(fetchPromoFilmFx.doneData, (_, result) => result).on(changeStatusFx.doneData, (state, film) => film.id === state?.id ? film : state)

export const $similarFilms = createStore<FilmType[]>([]).on(fetchSimilarFilmsFx.doneData, (_, films) => films)

export const $user = createStore<UserType | null>(null).on([loginFx.doneData, fetchUserFx.doneData], (_, user) => user).reset(logoutFx.done)

export const $reviews = createStore<ReviewType[]>([]).on([fetchReviewsFx.doneData, addCommentFx.doneData], (_, reviews) => reviews)

export const $favoriteFilms = createStore<FilmType[]>([]).on(getFavoriteFx.doneData, (_, films) => films)

debug($user)
