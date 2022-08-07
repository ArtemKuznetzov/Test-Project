import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "../UI/Button";
import { RootState } from "../../store";
import { signout } from "../../store/actions/authActions";
import store from "../../store";
import { ThunkAction } from "redux-thunk";
import { TypedDispatch } from "../../store/types";

const Header: FC = () => {
  const navigate = useNavigate();
  const useTypedDispatch = () => useDispatch<TypedDispatch>();
  const dispatch = useTypedDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const logoutClickHandler = () => {
    dispatch(signout());
  };

  return (
    <nav className="navbar is-spaced has-shadowed">
      <div className="container">
        <div className="navbar-brand">
          <Link
            className="navbar-item"
            to={!authenticated ? "/" : "/dashboard"}
          >
            AppName
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-items">
            {!authenticated ? (
              <div className="buttons">
                <Button
                  text="Sign up"
                  onClick={() => navigate("/signup")}
                  className="is-primary"
                />
                <Button
                  text="Sign in"
                  onClick={() => navigate("/signin")}
                  className="is-primary"
                />
              </div>
            ) : (
              <Button
                text="Sign out"
                onClick={logoutClickHandler}
                className="is-primary"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
