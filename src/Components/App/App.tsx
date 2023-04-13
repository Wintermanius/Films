import { FC } from "react"
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

type AppScreenProps = {
  films: FilmType[];
}

const App: FC<AppScreenProps> = ({films}) => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainScreen films={films} />}/>
          <Route path={AppRoute.SingIn} element={<SingIn />}/>
          <Route path={AppRoute.MyList} 
                 element={
                  <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                    <MyList />
                  </PrivateRoute>
                 }
          /> 
          <Route path={AppRoute.Film} element={<MoviePage />}/>
          <Route path={AppRoute.AddReview} element={<AddReview />}/>
          <Route path={AppRoute.Player} element={<Player />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
