import express from 'express'
import cors from 'cors'
import session from 'express-session'
import PokemonController from "./pokemon/pokemon-controller.js";
import LikesController from "./likes/likes-controller.js";
import UsersController from "./users/users-controller.js";
import SessionController from "./session-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
import mongoose from "mongoose";
import FollowsController from "./follows/follows-controller.js";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.connect('mongodb+srv://ncarey:verysecurepassword@cluster0.wsid91c.mongodb.net/ncarey-final-proj?retryWrites=true&w=majority', options)

const app = express();
app.use(cors({
    credentials: true, //access-control-allow-credentials:true
    origin: 'http://localhost:3000'
}))
app.use(session({
    secret: 'should be an environment variable',
    resave: false, 
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.json())
PokemonController(app)
LikesController(app)
UsersController(app)
SessionController(app)
ReviewsController(app)
FollowsController(app)
app.listen(4000)