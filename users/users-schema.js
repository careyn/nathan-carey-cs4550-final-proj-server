import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    fullName: String,
    email: String,
    phone: String,
    dob: Date,
    bio: String,
    region: String,
    favorite: String,
    role: {type: String, enum: ['TRAINER', 'MODERATOR']}
}, {collection: 'users'})

export default usersSchema