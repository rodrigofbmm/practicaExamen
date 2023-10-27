import mongoose from "npm:mongoose@7.6.3";
import { Person } from "../types.ts";

const Schema = mongoose.Schema;

const personSchema = new Schema(
  {
    name: { type: String, required: true },
    raza: { type: String, required: true },
    descripcion: { type: String, required: true },
    habilidades: { type: String, required: true },
  },
  { timestamps: true }
);

export type PersonModelType = mongoose.Document & Omit<Person, "id">;

export default mongoose.model<PersonModelType>("Person", personSchema);