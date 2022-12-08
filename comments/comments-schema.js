import mongoose from "mongoose";

const commentsSchema = mongoose.Schema({
    comment: String,
    pokemon_name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }
}, {collection: 'comments'})
export default commentsSchema