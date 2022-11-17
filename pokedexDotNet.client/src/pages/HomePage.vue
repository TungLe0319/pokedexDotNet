<template>
  <div class="container-fluid">
<div class="row my-2">
  <div class="col-md-12 text-center">
    <h1>PokeDex</h1>
  </div>
</div>

<SearchBar/>

    <div class="row mt-3 ms-3 justify-content-center">

      <div class="col-md-4 px-0 p mt-5">
   
        <div class="row px-3 scrollY">
          <div class="col-md-12" v-for="p in pokemon" :key="p.id">
            <PokeList :pokemon="p" />
          </div>
        </div>
      </div>
      <div class="col-md-6 d-flex justify-content-center align-items-center ">
        <PokemonDetails :pokemon="details"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import PokeList from "../components/PokeList.vue";
import PokemonDetails from "../components/PokemonDetails.vue";
import { pokemonService } from "../services/PokemonService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    onMounted(() => {
      getAllPokemon();
    
    });
    async function getAllPokemon() {
      try {
        await pokemonService.getAllPokemon();
      } catch (error) {
        Pop.error(error, "[getAllPokemon]");
      }
    }
  
    return {
      pokemon: computed(() => AppState.pokemon),
      details: computed(() => AppState.activePokemon),
      
    };
  },
  components: { PokeList, PokemonDetails },
};
</script>

<style scoped lang="scss">
.scrollY {
  height: 86vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
