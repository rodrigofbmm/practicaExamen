import { Request, Response } from "npm:express@4.18.2";
import PersonModel from "../db/person.ts";

const getPerson = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const person = await PersonModel.findById(id).exec();
    if (!person) {
      res.status(404).send("Person not found");
      return;
    }
    res.status(200).send({
      name: person.name,
      raza: person.raza,
      descripcion: person.descripcion,
      habilidades: person.habilidades,
      id: person._id.toString(),
    });
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getPerson;