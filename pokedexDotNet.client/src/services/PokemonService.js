import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { PokemonDetail } from "../models/PokemonDetail.js";
import { pokeAPI } from "./AxiosService.js";

class PokemonService {
  async getAllPokemon() {
    const res = await pokeAPI.get("pokemon", {
      params: {
        limit: 100,
      },
    });
    // console.log(res.data);
    let pokemons = res.data.results.map((p) => new Pokemon(p));

    for (const poke of pokemons) {
     const pokemon = await this.getPokemon(poke.id)
      AppState.pokemon.push(pokemon)
    }
    
         console.log('[example]', AppState.pokemon);
        //  console.log(AppState.example);
  }
  async getPokemon(id){
    const res = await pokeAPI.get(`pokemon/${id}`);
    return new PokemonDetail(res.data)
  }

  async getPokemonDetails(id) {
    const res = await pokeAPI.get(`pokemon/${id}`);
    console.log("[activePokemon]", res.data);
    //  console.log(AppState.activePokemon);
    AppState.activePokemon = new PokemonDetail(res.data);
    // console.log(AppState.activePokemon);
  }
}
export const pokemonService = new PokemonService();
