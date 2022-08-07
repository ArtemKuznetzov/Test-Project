import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/sections/Header";
import SignUp from "./components/pages/Signup";
import SignIn from "./components/pages/Signin";
import ForgotPassword from "./components/pages/ForgotPassword";
import Homepage from "./components/pages/Homepage";
import Dashboard from "./components/pages/Dashboard";
import PrivateRoute from "./components/auth/PrivateRoute";
import PublicRoute from "./components/auth/PublicRoute";
import Loader from "./components/UI/Loader";
import firebase from "./firebase/config";
import {
  getUserById,
  setLoading,
  setNeedVerification,
} from "./store/actions/authActions";
import { RootState } from "./store";
import { TypedDispatch } from "./store/types";

const App: FC = () => {
  const useTypedDispatch = () => useDispatch<TypedDispatch>();
  const dispatch = useTypedDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);

  // Check if user exists
  useEffect(() => {
    dispatch(setLoading(true));
    const unsucribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setLoading(true));
        await dispatch(getUserById(user.uid));
        if (!user.emailVerified) {
          dispatch(setNeedVerification());
        }
      }
      dispatch(setLoading(false));
    });
    return () => {
      unsucribe();
    };
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        {/* <PublicRoute path="/" component={Homepage} />
        <PublicRoute path="/signup" component={SignUp} /> */}
        <PublicRoute path="/signin" component={SignIn} />
        {/* <PublicRoute path="/forgot-password" component={Dashboard} />
        <PrivateRoute path="/dashboard" component={Dashboard} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
