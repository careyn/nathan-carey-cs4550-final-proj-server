import mongoose from "mongoose";

const catchesSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    pokemon: {type: mongoose.Schema.Types.ObjectId, ref: 'PokemonModel'},
}, {collection: 'catches'})
export default catchesSchema