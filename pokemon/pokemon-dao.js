import pokemonModel from "./pokemon-model.js";

export const findAllPokemon = async () => {
    const pokemon = await pokemonModel.find()
    return pokemon
}
export const createPokemon = async (pokemon) => {
    const insertedPokemon = await pokemonModel.create(pokemon)
    return insertedPokemon
}
export const deletePokemon = async (mid) => {
    const status = await pokemonModel.deleteOne({_id: mid})
    return status
}