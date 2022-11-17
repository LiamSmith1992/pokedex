import { appState } from "../AppState.js"
import { Pokemon } from "../Models/pokemon.js"
import { setHTML } from "../Utils/Writer.js"


const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})


class PokemonsService {


  async getPokemon() {
    const res = await pokemonApi.get()
    console.log('getting pokemon', res.data.results)
    appState.pokemon = res.data.results
  }
  async getOnePokemon(name) {
    const res = await pokemonApi.get(name)
    console.log('onePoke', res.data)
    appState.activePokemon = new Pokemon(res.data)
  }



}









export const pokemonsService = new PokemonsService