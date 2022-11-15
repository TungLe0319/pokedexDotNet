import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { pokeAPI } from "./AxiosService.js"

class PokemonService{
async getAllPokemon(){
  const res = await pokeAPI.get('pokemon',{
    params:{
      limit:1115
    }
  })
  console.log(res.data);
  AppState.pokemon = res.data.results.map(p=> new Pokemon(p))
}
}
export const pokemonService = new PokemonService()