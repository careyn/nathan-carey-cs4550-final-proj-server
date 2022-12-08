import pokemonModel from "./pokemon-model.js";
import catchesModel from "../catches/catches-model.js"

export const findAllPokemon = async () => {
    const pokemon = await pokemonModel.find()
    return pokemon
}
export const createPokemon = async (pokemon) => {
    const insertedPokemon = await pokemonModel.create(pokemon)
    return insertedPokemon
}
export const deletePokemon = async (pid) => {
    const status = await catchesModel.deleteMany({pokemon: pid})
    const status1 = await pokemonModel.deleteOne({_id: pid})
    return status
}