import * as commentsDao from "./comments-dao.js"

const CommentsController = (app) => {
    const createComment = async (req, res) => {
        const comment = req.body
        const currentUser = req.session['currentUser']
        comment.author = currentUser._id
        const actualComment = await commentsDao.createComment(comment)
        res.json(actualComment)
    }
    const deleteComment = async (req, res) => {
        const cid = req.params['cid']
        const status = await commentsDao.deleteComment(cid)
        res.send(status)
    }
    const findCommentsByPokemon = async (req, res) => {
        const pokemon_name = req.params.pokemon_name
        const comments = await commentsDao.findCommentsByPokemon(pokemon_name)
        res.json(comments)
    }
    const findCommentsByAuthor = async (req, res) => {
        const author = req.params.author
        const comments = await commentsDao.findCommentsByAuthor(author)
        res.json(comments)
    }
    app.post('/api/comments', createComment)
    app.delete('/api/comments/:cid', deleteComment)

    app.get('/api/pokemon/:pokemon_name/comments', findCommentsByPokemon)
    app.get('/api/users/:author/comments', findCommentsByAuthor)
}
export default CommentsController