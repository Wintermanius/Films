import { createEffect } from "effector";

export const fetchFilmsFx = createEffect(async () => {
  const response = await fetch('https://11.react.pages.academy/wtw/films')
  const result = await response.json()
  return result
})
