import { FC } from "react"
import { Link } from "react-router-dom"

const NotFound: FC = () => {
  return (
    <>
      <div className="user-page">
          <h1>404 Not Found</h1>
          <Link className="film-card__title" to='/'>Go to Main</Link>
      </div>
    </>
  )
}

export default NotFound
