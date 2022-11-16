<template>
  
  <div class="container-fluid">
    <div class="row ">
      <div class="col-md-2  px-0 p">
        <div class=" p-1  bg-danger text-light text-center"><h4 >Pokemon List</h4></div>
        <ul class=" px-3 m-0">
<PokeList v-for="p in pokemon" :pokemon="p" :key="p.id" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import PokeList from "../components/PokeList.vue";
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
            }
            catch (error) {
                Pop.error(error, "[getAllPokemon]");
            }
        }
        return {
            pokemon: computed(() => AppState.pokemon)
        };
    },
    components: { PokeList }
};
</script>

<style scoped lang="scss"></style>
