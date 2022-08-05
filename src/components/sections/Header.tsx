import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "../UI/Button";
import { RootState } from "../../store";
import { signout } from "../../store/actions/authActions";

const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      </div>
    </nav>
  );
};
