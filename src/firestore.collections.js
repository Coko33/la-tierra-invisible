import { collection } from "firebase/firestore";
import { db } from "./firebase";

export const fechasEventosCollectionRef = collection(db, "fechasEventos");
