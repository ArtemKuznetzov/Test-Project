import firebase from "firebase/compat/app";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThunkAction } from "redux-thunk";
import Dashboard from "./components/pages/Dashboard";
import ForgotPassword from "./components/pages/ForgotPassword";
import Homepage from "./components/pages/Homepage";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Header from "./components/sections/Header";
import Loader from "./components/UI/Loader";
import {
  getUserById,
  setLoading,
  setNeedVerification,
} from "./store/actions/authActions";
import { RootState } from "./store/store";
import { AuthAction, SET_USER, TypedDispatch, User } from "./store/types";

export default function App() {
  const useTypedDispatch = () => useDispatch<TypedDispatch>();
  const dispatch = useTypedDispatch();
  const { loading, authenticated } = useSelector(
    (state: RootState) => state.auth
  );

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

  // This is correct request to the firestore database

  firebase
    .firestore()
    .collection("users")
    .onSnapshot((docs: any) => {
      docs.forEach((doc: any) => {
        console.log("doc id", doc.id);
        console.log("data", doc.data());
      });
    });

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {!authenticated && <Route path="/dashboard" element={<Dashboard />} />}
      </Routes>
    </BrowserRouter>
  );
}
