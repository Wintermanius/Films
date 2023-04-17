import { createEvent, createStore, sample } from "effector";
import { fetchFilmsFx } from "./api";

export const $films = createStore([])

$films.on(fetchFilmsFx.doneData, (_, result) => result)