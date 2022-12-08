import commentsModel from "./comments-model.js";

export const createComment = (comment) =>
    commentsModel.create(comment)

export const deleteComment = async (cid) => {
    const status = await commentsModel.deleteOne({_id: cid})
    return status
}

export const findCommentsByPokemon = (pokemon_name) =>
    commentsModel
        .find({pokemon_name})
        .populate('author')
        .exec()

export const findCommentsByAuthor = (author) =>
    commentsModel.find({author})