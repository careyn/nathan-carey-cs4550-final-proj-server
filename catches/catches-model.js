import mongoose from "mongoose";
import catchesSchema from "./catches-schema.js";

const catchesModel = mongoose.model('CatchesModel', catchesSchema)

export default catchesModel