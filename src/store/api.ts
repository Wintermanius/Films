import { createEffect } from "effector";
import { FilmType } from "../types/film-type";
import $axios from "../services/axios";
import { UserType } from "../types/userType";
import { saveToken } from "../services/token";
import { LoginFormType } from "../types/loginFormType";

export const fetchFilmsFx = createEffect(async () => {
  const response = await $axios.get('/films')
  return response.data
})

export const fetchPromoFilmFx = createEffect(async () => {
  const response = await $axios.get('/promo')
  return response.data
})

export const fetchSimilarFilmsFx = createEffect<{ filmId: number }, FilmType[], Error>(async ({ filmId: filmId}) => {
  const response = await $axios.get(`/films/${filmId}/similar`)
  return response.data
})

export const loginFx = createEffect<LoginFormType , UserType, Error>(async ({ email, password }) => {
  const response = await $axios.post('/login', { email, password })
  saveToken(response.data.token);
  return response.data
})

export const fetchUserFx = createEffect<void , UserType, Error>(async () => {
  const response = await $axios.get('/login')
  return response.data
})
