import { FC } from "react";
import { Link } from "react-router-dom";

const TmpSingIn: FC = () => {
  return(
    <Link to='/login' className="user-block__link">Sing in</Link>
  )
}

export default TmpSingIn
