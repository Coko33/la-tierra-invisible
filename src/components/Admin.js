import React, { useState, useEffect } from "react";
import AddData from "./AddData";
import Login from "./Login";
import { firebaseApp } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ListData from "./ListData";
const auth = getAuth(firebaseApp);
export default function Admin() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuarioGlobal(usuarioFirebase);
    } else {
      setUsuarioGlobal(null);
    }
  });
  return <>{usuarioGlobal ? <ListData /> : <Login />}</>;
}
