import { Request, Response } from "npm:express@4.18.2";
import PersonModel from "../db/person.ts";

const addPerson = async (req: Request, res: Response) => {
  try {
    const { name, raza, descripcion, habilidades } = req.body;
    if (!name || !raza || !habilidades || !descripcion) {
      res.status(400).send("tieenes que poner si o si el nombre ,la raza , la descripcion y las habilidades");
      return;
    }
    if (raza !== "hobbits" && raza !== "humanos" && raza !== "elfos" && raza !== "enanos" && raza !== "ents") {
      res.status(400).send("Debe ser una raza válida");
      return;
    }

    const newPerson = new PersonModel({ name, raza, descripcion, habilidades });
    await newPerson.save();

    res.status(200).send({
      name: newPerson.name,
      raza: newPerson.raza,
      descripcion: newPerson.descripcion,
      habilidades: newPerson.habilidades,
      id: newPerson._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addPerson;