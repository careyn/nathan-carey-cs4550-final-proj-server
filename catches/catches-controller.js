import * as catchesDao from "./catches-dao.js";

const CatchesController = (app) => {
    const userCatchesPokemon = async (req, res) => {
        const uid = req.params.uid
        const pid = req.params.pid

        const newCatch = await catchesDao.userCatchesPokemon(uid, pid)
        res.json(newCatch)
    }
    const userReleasesPokemon = async (req, res) => {
        const uid = req.params.uid
        const pid = req.params.pid
        const status = await catchesDao.userReleasesPokemon(uid, pid)

        res.send(status)
    }
    const findAllCatches = async (req, res) => {
        const catches = await catchesDao.findAllCatches()
        res.json(catches)
    }
    const findPokemonCaughtByUser = async (req, res) => {
        const uid = req.params.uid
        const pokemon = await catchesDao.findPokemonCaughtByUser(uid)

        res.json(pokemon)
    }

    app.post('/users/:uid/catches/:pid', userCatchesPokemon)
    app.delete('/users/:uid/releases/:pid', userReleasesPokemon)
    app.get('/catches', findAllCatches)
    app.get('/users/:uid/catches', findPokemonCaughtByUser)
}

export default CatchesController;