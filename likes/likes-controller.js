import * as likesDao from "./likes-dao.js";

const LikesController = (app) => {
    const userLikesMovie = async (req, res) => {
        const uid = req.params.uid
        const mid = req.params.mid

        const newLike = await likesDao.userLikesMovie(uid, mid)
        res.json(newLike)
    }
    const userUnlikesMovie = async (req, res) => {
        const uid = req.params.uid
        const mid = req.params.mid
        const status = await likesDao.userUnlikesMovie(uid, mid)

        res.send(status)
    }
    const findAllLikes = async (req, res) => {
        const likes = await likesDao.findAllLikes()
        res.json(likes)
    }
    const findMoviesLikedByUser = async (req, res) => {
        const uid = req.params.uid
        const movies = await likesDao.findMoviesLikedByUser(uid)

        res.json(movies)
    }

    app.post('/users/:uid/likes/:mid', userLikesMovie)
    app.delete('/users/:uid/unlikes/:mid', userUnlikesMovie)
    app.get('/likes', findAllLikes)
    app.get('/users/:uid/likes', findMoviesLikedByUser)
}

export default LikesController;