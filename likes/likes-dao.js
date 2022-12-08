import likesModel from "./likes-model.js";

export const userLikesMovie = async (uid, mid) => {
    return await likesModel.create({user: uid, pokemon: mid})
}
export const userUnlikesMovie = async(uid, mid) => {
    return await likesModel.deleteOne({user: uid, pokemon: mid})
}
export const findMoviesLikedByUser = async(uid) => {
    return await likesModel
        .find({user: uid}, {user: false})
        .populate('pokemon', 'name')
        .exec()
}
export const findUsersThatLikeMovie = async(mid) => {
    return await likesModel
        .find({pokemon: mid}, {pokemon: false})
        .populate('user', 'username')
        .exec()
}
export const findAllLikes = async () =>
    await likesModel.find()
