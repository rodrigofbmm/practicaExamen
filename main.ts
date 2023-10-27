import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

import getPerson from "./resolvers/getPerson.ts";
import addPerson from "./resolvers/addPerson.ts";
import updatePerson from "./resolvers/updatePerson.ts";
import deletePerson from "./resolvers/deletePerson.ts";

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import getPersonaje from "./resolvers/getPersonaje.ts";
const env = await load();

const MONGO_URL = "mongodb+srv://rodrigofbm:1234567890r@cluster0.ern9y.mongodb.net/ejercicioparcial?retryWrites=true&w=majority";

if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}

await mongoose.connect(MONGO_URL);
const app = express();
app.use(express.json());
app
  .get("/api/tierramedia/personajes/:id", getPerson)
  .get("/api/tierramedia/personajes", getPersonaje)
  .post("/api/tierramedia/personajes", addPerson)
  .put("/api/tierramedia/personajes/:id", updatePerson)
  .delete("/api/tierramedia/personajes/:id", deletePerson);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});