import { FC } from "react"
import Logo from "../Logo/Logo"
import Avatar from "../../assets/img/avatar.jpg"

const Header: FC = ({}) => {
  return (
    <header className="page-header film-card__head">
        <Logo />

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={Avatar} alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>
  )
}

export default Header
