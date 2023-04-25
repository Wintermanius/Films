import { FC, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppRoute, AuthorizationStatus } from "../../const"
import MainScreen from "../../Pages/MainScreen"
import SingIn from "../../Pages/SingIn"
import Player from "../../Pages/Player"
import MoviePage from "../../Pages/MoviePage"
import AddReview from "../../Pages/AddReview"
import MyList from "../../Pages/MyList"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import { FilmType } from "../../types/film-type"
import { useStore } from "effector-react"
import { $film, $films } from "../../store/store"
import { fetchFilmsFx, fetchPromoFilmFx, fetchUserFx } from "../../store/api"



const App: FC = () => {

  const films1 = useStore($films)
  
  useEffect(() => {
    fetchUserFx()
    fetchFilmsFx()
    fetchPromoFilmFx()
  }, [])

  const film1 = useStore($film)

  return (
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainScreen film1={film1} films1={films1}  />}/>
          <Route path={AppRoute.SingIn} element={<SingIn />}/>
          <Route path={AppRoute.MyList} 
                 element={
                  <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                    <MyList />
                  </PrivateRoute>
                 }
          /> 
          <Route path={AppRoute.Film} element={<MoviePage films={films1}  />}/>
          <Route path={AppRoute.AddReview} element={<AddReview films={films1} />}/>
          <Route path={AppRoute.Player} element={<Player films={films1} />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
