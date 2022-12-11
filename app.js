import express from 'express'
import cors from 'cors'
import session from 'express-session'
import PokemonController from "./pokemon/pokemon-controller.js";
import CatchesController from "./catches/catches-controller.js";
import UsersController from "./users/users-controller.js";
import SessionController from "./session-controller.js";
import CommentsController from "./comments/comments-controller.js";
import mongoose from "mongoose";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.connect(process.env.DB_CONNECTION_STRING_FINAL_PROJ, options)

console.log(process.env.SESSION_SECRET)
console.log(process.env.DB_CONNECTION_STRING_FINAL_PROJ)

const app = express();
app.use(cors({
    credentials: true, //access-control-allow-credentials:true
    origin: '*'
}))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, 
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.json())
PokemonController(app)
CatchesController(app)
UsersController(app)
SessionController(app)
CommentsController(app)
app.listen(process.env.PORT || 4000)