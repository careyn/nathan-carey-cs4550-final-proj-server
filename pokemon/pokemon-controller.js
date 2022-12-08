import * as pokemonDao from './pokemon-dao.js'


export const getPokemon = () => pokemon;

const PokemonController = (app) => {

    const createPokemon = async (req, res) => {
        const pokemon = req.body
        const actualPokemon = await pokemonDao.createPokemon(pokemon)
        res.send(actualPokemon)
    }
    const findAllPokemon = async (req, res) => {
        const allPokemon = await pokemonDao.findAllPokemon()
        res.send(allPokemon)
    }
    const deletePokemon = async (req, res) => {
        const pid = req.params['pid']
        const status = await pokemonDao.deletePokemon(pid)
        res.send(status)
    }

    app.post  ('/pokemon', createPokemon)
    app.get   ('/pokemon', findAllPokemon)
    app.delete('/pokemon/:pid', deletePokemon)
}

export default PokemonController;