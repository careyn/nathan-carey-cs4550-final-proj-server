import mongoose from "mongoose";

const pokemonSchema = mongoose.Schema({
    name: {type: String, required: true},
}, {collection: 'pokemon'})

export default pokemonSchema