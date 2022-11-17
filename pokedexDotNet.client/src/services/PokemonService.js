import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { PokemonDetail } from "../models/PokemonDetail.js";
import { pokeAPI } from "./AxiosService.js";

class PokemonService {
  async getAllPokemon() {
    const res = await pokeAPI.get("pokemon", {
      params: {
        limit: 1115,
      },
    });
    console.log(res.data);
    AppState.pokemon = res.data.results.map((p) => new Pokemon(p));
   
  }

  async getPokemonDetails(id) {
    const res = await pokeAPI.get(`pokemon/${id}`);
    AppState.activePokemon = new PokemonDetail(res.data);
    console.log(AppState.activePokemon);
  }

}
export const pokemonService = new PokemonService();
