import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
import { fechasEventosCollectionRef } from "./../firestore.collections";
import AddData from "./AddData.js";
import EditData from "./EditData.js";

export default function ListData() {
  const [fechasEventos, setFechasEventos] = useState([]);

  useEffect(() => {
    getFechasEventos();
  }, []);

  useEffect(() => {
    setFechasEventos(fechasEventos);
  }, [fechasEventos]);

  function getFechasEventos() {
    /* const fechasEventosCollectionRef = collection(db, "fechasEventos"); */

    getDocs(fechasEventosCollectionRef)
      .then((res) => {
        const fechas = res.docs.map((fecha) => ({
          data: fecha.data(),
          id: fecha.id,
        }));
        setFechasEventos(fechas);
      })
      .catch((err) => console.log(err.message));
  }

  const formatFecha = (f) => {
    const dias = [
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sabado",
      "domingo",
    ];
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "setiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const unixDateEpochTimeMS = f * 1000;
    const d = new Date(unixDateEpochTimeMS);
    const date = d.toLocaleString();
    const [fecha, hora] = date.split(" ");
    const diaDeSemana = d.getDay();
    const dia = fecha.split("/")[0];
    const mes = fecha.split("/")[1];
    const mesNombre = meses[mes - 1];
    const diaNombre = dias[diaDeSemana - 1];
    const hhmm = hora.substring(0, 5);

    return { diaNombre, dia, mesNombre, hhmm };
  };

  return (
    <>
      <AddData></AddData>
      <EditData></EditData>
      <div>
        <h1>Fechas agendadas</h1>
        <button onClick={() => getFechasEventos()}>refresh</button>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Titulo</th>
              <th>Bajada</th>
              <th>Descripción</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Link de la imagen</th>
              <th>Precio</th>
              <th>Habilitado</th>
              <th>Eliminado</th>
              <th>Agotado</th>
              <th>Proximamente</th>
            </tr>
          </thead>
          <tbody>
            {fechasEventos ? (
              fechasEventos.map((fecha) => (
                <tr key={fecha.id}>
                  <td>{fecha.id}</td>
                  <td>{fecha.data.titulo}</td>
                  <td>{fecha.data.bajada}</td>
                  <td>{fecha.data.descripcion}</td>
                  {fecha.data.fechaHora ? (
                    <td>
                      {formatFecha(fecha.data.fechaHora.seconds).diaNombre}{" "}
                      {formatFecha(fecha.data.fechaHora.seconds).dia} de{" "}
                      {formatFecha(fecha.data.fechaHora.seconds).mesNombre}
                    </td>
                  ) : (
                    <td>no hay fecha</td>
                  )}
                  {fecha.data.fechaHora ? (
                    <td>{formatFecha(fecha.data.fechaHora.seconds).hhmm}</td>
                  ) : (
                    <td>no hay fecha</td>
                  )}
                  <td>{fecha.data.uid_img}</td>
                  <td>{fecha.data.precio}</td>
                  <td>{fecha.data.habilitado}</td>
                  <td>{fecha.data.eliminado}</td>
                  <td>{fecha.data.agotado}</td>
                  <td>{fecha.data.proximamente}</td>
                </tr>
              ))
            ) : (
              <tr>Sin fechas agedadas</tr>
            )}
          </tbody>
        </table>
      </div>
      {/*       <AddData></AddData>
      <EditData></EditData> */}
    </>
  );
}
