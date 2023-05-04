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
import { useStore } from "effector-react"
import { $film, $films, $user } from "../../store/store"
import { fetchFilmsFx, fetchPromoFilmFx, fetchUserFx } from "../../store/api"



const App: FC = () => {

  const films1 = useStore($films)
  
  useEffect(() => {
    fetchUserFx()
    fetchFilmsFx()
    fetchPromoFilmFx()
  }, [])

  const film1 = useStore($film)
  const user1 = useStore($user)

  return (
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainScreen user={user1} film={film1} films={films1}  />}/>
          <Route path={AppRoute.SingIn} element={<SingIn />}/>
          <Route path={AppRoute.MyList} 
                 element={
                  <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                    <MyList />
                  </PrivateRoute>
                 }
          /> 
          <Route path={AppRoute.Film} element={<MoviePage user={user1} films={films1}  />}/>
          <Route path={AppRoute.AddReview} element={<AddReview films={films1} />}/>
          <Route path={AppRoute.Player} element={<Player films={films1} />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
