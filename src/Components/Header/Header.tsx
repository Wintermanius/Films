import { FC } from "react"
import Logo from "../Logo/Logo"
import Avatar from "../../assets/img/avatar.jpg"
import { Link } from "react-router-dom"
import { UserType } from "../../types/userType"
import { loginFx, logoutFx } from "../../store/api"
import TmpSingIn from "../Template/SingIn"
import TmpSingOut from "../Template/SingOut"


type HeaderProps = {
  user?: UserType | null
}

const Header: FC<HeaderProps> = ({user}) => {

  return (
    <header className="page-header film-card__head">
        <Logo />

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            {user ? <Link to='/mylist'>
              <img src={user ? user.avatarUrl : Avatar} alt="User avatar" width="63" height="63" />
            </Link> : <img src={Avatar} alt="User avatar" width="63" height="63" />}
          </div>
        </li>
        <li className="user-block__item">
          {user ? <TmpSingOut /> : <TmpSingIn />}
        </li>
      </ul>
    </header>
  )
}

export default Header
