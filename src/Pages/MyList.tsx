import { FC, useEffect } from "react"
import Logo from "../Components/Logo/Logo"
import FilmList from "../Components/FilmList/FilmList"
import { fetchFavoriteFx, logoutFx } from "../store/api"
import { useStore } from "effector-react"
import { $favoriteFilms } from "../store/store"
import { UserType } from "../types/userType"
import { Link } from "react-router-dom"

type MyListProps = {
  user?: UserType | null
}

const MyList: FC<MyListProps> = ({user}) => {

  useEffect(() => {
    fetchFavoriteFx()
  }, [])

  const favorites = useStore($favoriteFilms)

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favorites.length}</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              {user &&<img src={user.avatarUrl} alt="User avatar" width="63" height="63" />}
            </div>
          </li>
          <li className="user-block__item">
            <Link to='/' className="user-block__link" onClick={() => logoutFx()}>Sign out</Link>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={favorites} />
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  )
}

export default MyList
