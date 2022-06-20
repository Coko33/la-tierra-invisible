import React, { useState } from "react";
import "./Login.css";

import { firebaseApp } from "../firebase.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export default function Login() {
  const [estaRegistrandose, setEstaRegistrandose] = useState(false);
  async function submitHandler(e) {
    e.preventDefault();
    const correo = e.target.usuario.value;
    const contra = e.target.password.value;

    if (estaRegistrandose) {
      const usuario = await createUserWithEmailAndPassword(
        auth,
        correo,
        contra
      );
    } else {
      const usuario = await signInWithEmailAndPassword(auth, correo, contra);
    }
  }
  return (
    <>
      <div className="Login-container">
        <form onSubmit={submitHandler} className="Login-form">
          <label htmlFor="usuario">Usuario</label>
          <input
            className="Login-inputUsuario"
            name="usuario"
            type="text"
            placeholder="igresar usuario"
          ></input>
          <label htmlFor="password">Contraseña</label>
          <input
            className="Login-inputContraseña"
            name="password"
            type="password"
            placeholder="ingresar contraseña"
          ></input>
          <input className="Login-button" type="submit"></input>

          <button
            onClick={() => signInWithRedirect(auth, googleProvider)}
            className="Login-button google"
          >
            Acceder con Google
          </button>
        </form>
      </div>
    </>
  );
}
