import { FC, FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Logo from "../Components/Logo/Logo"
import { loginFx } from "../store/api"

const SingIn: FC = () => {

  const[email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!email || !password) return

    loginFx({ email, password })
  }
  
  const navigate = useNavigate();
  const handleClick = () => {
    if (email && password) {
      navigate("/");
    }
  }

  return (
    <>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit" onClick={handleClick}>Sign in</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default SingIn
