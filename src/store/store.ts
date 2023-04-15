import { createEvent, createStore, sample } from "effector";
import { fetchFilmsFx } from "./api";

export const updateFilms = createEvent()
export const $films = createStore([]).on(fetchFilmsFx.doneData, (_, result) => result)

sample({
  clock: updateFilms,
  target: fetchFilmsFx,
})