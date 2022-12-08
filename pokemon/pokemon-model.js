import mongoose from "mongoose";
import pokemonSchema from "./pokemon-schema.js";

const pokemonModel = mongoose.model('PokemonModel', pokemonSchema)

export default pokemonModel