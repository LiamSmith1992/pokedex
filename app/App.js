import { PokemonsController } from "./Controllers/pokemonsController.js";


class App {

  pokemonsController = new PokemonsController()
}

window["app"] = new App();
