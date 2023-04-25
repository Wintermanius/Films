import { FC } from "react"
import { Link } from "react-router-dom"
import { logoutFx } from "../../store/api"

const TmpSingOut: FC = () => {
  return(
    <Link to='#' className="user-block__link" onClick={() => logoutFx()}>Sing out</Link>
  )
}

export default TmpSingOut
