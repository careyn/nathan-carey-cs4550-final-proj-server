import catchesModel from "./catches-model.js";

export const userCatchesPokemon = async (uid, pid) => {
    return await catchesModel.create({user: uid, pokemon: pid})
}
export const userReleasesPokemon = async(uid, pid) => {
    return await catchesModel.deleteOne({user: uid, pokemon: pid})
}
export const findPokemonCaughtByUser = async(uid) => {
    return await catchesModel
        .find({user: uid}, {user: false})
        .populate('pokemon', 'name')
        .exec()
}
export const findAllCatches = async () =>
    await catchesModel.find()
