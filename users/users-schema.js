import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    fullName: {type:String, default: null},
    email: {type:String, default: null},
    bio: {type:String, default: null},
    region: {type:String, default: null},
    favorite: {type:String, default: null},
    role: {type: String, enum: ['TRAINER', 'MODERATOR']}
}, {collection: 'users'})

export default usersSchema