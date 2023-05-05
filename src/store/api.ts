import { createEffect } from "effector";
import { FilmType } from "../types/film-type";
import $axios from "../services/axios";
import { UserType } from "../types/userType";
import { dropToken, saveToken } from "../services/token";
import { LoginFormType } from "../types/loginFormType";
import { ReviewType } from "../types/review-type";
import { CommentType } from "../types/comment-type";

export const fetchFilmsFx = createEffect(async () => {
  const response = await $axios.get('/films')
  return response.data
})

export const fetchPromoFilmFx = createEffect(async () => {
  const response = await $axios.get('/promo')
  return response.data
})

export const fetchSimilarFilmsFx = createEffect<{ filmId: number }, FilmType[], Error>(async ({ filmId }) => {
  const response = await $axios.get(`/films/${filmId}/similar`)
  return response.data
})

export const loginFx = createEffect<LoginFormType , UserType, Error>(async ({ email, password }) => {
  const response = await $axios.post('/login', { email, password })
  saveToken(response.data.token)
  return response.data
})

export const fetchUserFx = createEffect<void , UserType, Error>(async () => {
  const response = await $axios.get('/login')
  return response.data
})

export const logoutFx = createEffect<void, void, Error>(async () => {
  await $axios.delete('/logout')
  dropToken()
})

export const fetchReviewsFx = createEffect<{ filmId: number }, ReviewType[], Error>(async ({ filmId }) => {
  const response = await $axios.get(`/comments/${filmId}`)
  return response.data
})

export const addCommentFx = createEffect<{filmId: number, formData: CommentType}, ReviewType[], Error>(async ({filmId, formData }) => {
  const response = await $axios.post(`/comments/${filmId}`, formData)
  return response.data
})

export const changeStatusFx = createEffect<{ filmId: number, status: number }, FilmType, Error>(async({filmId, status}) => {
  const response = await $axios.post(`/favorite/${filmId}/${status}`)
  return response.data
})

export const fetchFavoriteFx = createEffect<void, FilmType[], Error>(async () => {
  const response = await $axios.get(`/favorite`)
  return response.data
})
