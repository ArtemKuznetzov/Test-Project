import React, { FC } from "react";
import { useSelector } from "react-redux";
import {
  Route,
  Routes,
  Navigate,
  RouteProps,
  BrowserRouter,
} from "react-router-dom";
import { RootState } from "../../store/store";

interface Props extends RouteProps {
  component: any;
}

// const PublicRoute: FC<Props> = ({ component: Component, ...rest }) => {
//   const { authenticated } = useSelector((state: RootState) => state.auth);

//   if (!authenticated) {
//     return <Route path="/contacts" element={<Component />} />;
//   } else {
//     return <Route path="*" element={<Navigate to="/dashboard" replace />} />;
//   }
// };

// export default PublicRoute;
