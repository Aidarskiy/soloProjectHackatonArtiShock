import React, { useEffect, useReducer } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../FireBase";

export const authContext = React.createContext();
const INIT_STATE = {
  user: "",
  email: "",
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "EMAIL":
      return { ...state, email: action.payload };

    default:
      return state;
  }
};

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // AUTH with google

  const googleProvider = new GoogleAuthProvider();
  const authWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  //Проверка на то что в пользователь в системе или нет
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //   console.log(user);
      let action = {
        type: "SET_USER",
        payload: user,
      };
      dispatch(action);
    });
  }, []);

  //Выйти из системы
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.log(e);
    }
  };

  //
  let adminEmail = "nurlanabdullaev9820@gmail.com";

  const loginUserWithEmail = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (email === adminEmail) {
        dispatch({
          type: "EMAIL",
          payload: email,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <authContext.Provider
      value={{
        authWithGoogle,
        loginUserWithEmail,
        logOut,
        adminEmail,
        email: state.email,
        user: state.user,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
