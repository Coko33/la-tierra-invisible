import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { firebaseApp } from "../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { fechasEventosCollectionRef } from "../firestore.collections";
import "./AddData.css";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);
export default function AddData() {
  const [titulo, setTitulo] = useState();
  const [bajada, setBajada] = useState();
  const [descripcion, setDescripcion] = useState();
  const [precio, setPrecio] = useState();
  const [fechaHora, setFechaHora] = useState();
  const [habilitado, setHabilitado] = useState(1);
  const [eliminado, setEliminado] = useState(0);
  const [agotado, setAgotado] = useState(0);
  const [proximamente, setProximamente] = useState(0);
  const [archivo, setArchivo] = useState();
  const [previewUrl, setPreviewUrl] = useState([]);

  const previewImagen = (e) => {
    const reader = new FileReader();
    const files = e.target.files;
    if (files && files.length) {
      reader.onload = (e) => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleChangeInput = (e) => {
    setArchivo(e.target.files[0]);
    previewImagen(e);
  };

  const subirEvento = async (e) => {
    e.preventDefault();
    /* const archivo = e.target.files[0]; */
    const storage = getStorage(firebaseApp);
    const archivoPath = ref(storage, archivo.name);
    uploadBytes(archivoPath, archivo).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        /* const eventosCollectionRef = collection(db, "eventos"); */
        addDoc(fechasEventosCollectionRef, {
          titulo,
          bajada,
          descripcion,
          precio,
          fechaHora: new Date(fechaHora),
          habilitado,
          eliminado,
          agotado,
          proximamente,
          url: downloadURL,
        })
          .then((res) => {
            document.getElementById("form1").reset();
            setPreviewUrl([]);
          })
          .catch((err) => {
            console.log(err.message);
          });
        alert(titulo);
      });
    });
  };

  return (
    <>
      <div>AddData</div>
      <button className="AddData-button" onClick={() => signOut(auth)}>
        cerrar sesión
      </button>

      <div>
        <h1>Agregar evento</h1>
        <form id="form1" onSubmit={subirEvento}>
          <label htmlFor="nombre">Nombre del evento</label>
          <input
            id="nombre"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          ></input>
          <br></br>
          <label htmlFor="bajada">Bajada del evento</label>
          <textarea
            id="bajada"
            type="text"
            value={bajada}
            onChange={(e) => setBajada(e.target.value)}
          ></textarea>
          <br></br>
          <label htmlFor="descripcion">Descripción del evento</label>
          <textarea
            id="descripcion"
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
          <br></br>
          <label htmlFor="precio">Precio de la entrada</label>
          <input
            id="precio"
            type="text"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          ></input>
          <br></br>
          <label htmlFor="precio">Fecha y hora</label>
          <input
            id="fechaHora"
            type="datetime-local"
            value={fechaHora}
            onChange={(e) => setFechaHora(e.target.value)}
          ></input>
          <br></br>
          <input
            id="archivo"
            type="file"
            name="archivo"
            onChange={(e) => handleChangeInput(e)}
          ></input>{" "}
          {previewUrl.length ? (
            <img className="previewImg" alt="preview" src={previewUrl} />
          ) : (
            <></>
          )}
          <button type="submit">Enviar Evento</button>
        </form>
      </div>
    </>
  );
}
