import { appState } from "../AppState.js"


export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.img = data.sprites.front_default
    this.height = data.height
    this.weight = data.weight
    this.type = data.types
  }

  get ActiveTemplate() {
    return `
    <div class="text-center">
    <section class="row">
      <h2 class="col-12">
        ${this.name}
      </h2>
      <img class="col-12" src="${this.img}" alt="">
      <div class="col-4">${this.weight}</div>
      <div class="col-4">${this.height}</div>
      <div class="col-4">${this.type[0].type.name}</div>

  `
  }

  static GetListTemplate(pokemon) {
    return `
  <div>
  <div class="col-12 border border-success selectable" onclick="app.pokemonsController.getOnePokemon('${pokemon.name}')">
       <h5> ${pokemon.name}</h5>
  </div>
  <div class="col-md-8">
  </div>
  </div>
  `
  }

  static PlaceholderTemplate() {
    return `<h3 class="text-center">Choose Pokemon!</h3>`
  }
}
