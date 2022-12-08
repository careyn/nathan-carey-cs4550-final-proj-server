import mongoose from "mongoose";

const pokemonSchema = mongoose.Schema({
    name: {type: String, required: true},
    likes: {type: Number, default: 0},
    liked: {type: Boolean, default: false},
    dislikes: Number,
}, {collection: 'pokemon'})

export default pokemonSchema