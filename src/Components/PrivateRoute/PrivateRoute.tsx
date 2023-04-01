import { Navigate } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { FC } from "react";

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

const PrivateRoute: FC<PrivateRouteProps> = ({authorizationStatus, children}) => {

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SingIn} />
  );
}

export default PrivateRoute;
