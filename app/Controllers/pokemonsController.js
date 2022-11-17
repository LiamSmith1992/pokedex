import { appState } from "../AppState.js";
import { Pokemon } from "../Models/pokemon.js";
import { pokemonsService } from "../Services/pokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawPokemon() {
  let pokemon = appState.pokemon
  let template = ''
  pokemon.forEach(p => template += Pokemon.GetListTemplate(p))
  console.log('drawing', pokemon)
  setHTML('pokemon-template', template)
}


function _drawActivePokemon() {
  let pokemon = appState.activePokemon
  if (pokemon) {
    setHTML('active-pokemon', pokemon.ActiveTemplate)
  } else {
    setHTML('active-pokemon', Pokemon.PlaceholderTemplate)
  }
}


export class PokemonsController {

  constructor() {
    this.getPokemon()
    appState.on('pokemon', _drawPokemon)
    appState.on('activePokemon', _drawActivePokemon)
  }



  async getPokemon() {
    try {
      await pokemonsService.getPokemon()
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }

  async getOnePokemon(name) {
    try {
      await pokemonsService.getOnePokemon(name)
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }
}













