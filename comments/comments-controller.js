import * as dao from "./comments-dao.js"

const CommentsController = (app) => {
    const createComment = async (req, res) => {
        const comment = req.body
        const currentUser = req.session['currentUser']
        comment.author = currentUser._id
        const actualComment = await dao.createComment(comment)
        res.json(actualComment)
    }
    const findCommentsByPokemon = async (req, res) => {
        const pokemon_name = req.params.pokemon_name
        const comments = await dao.findCommentsByPokemon(pokemon_name)
        res.json(comments)
    }
    const findCommentsByAuthor = async (req, res) => {
        const author = req.params.author
        const comments = await dao.findCommentsByAuthor(author)
        res.json(comments)
    }
    app.post('/api/comments', createComment)
    app.get('/api/pokemon/:pokemon_name/comments', findCommentsByPokemon)
    app.get('/api/users/:author/comments', findCommentsByAuthor)
}
export default CommentsController