<template>
  <!-- <li class="d-flex justify-content-between my-2 hover selectable" @click="getDetails()">
    <img
      width="30"
      height="30"
      src="https://cdn-icons-png.flaticon.com/512/361/361998.png"
      alt=""
    />
    <p class="mb-0 d-flex align-items-center ms-2">{{ pokemon?.name }}</p>
    <img :src="pokemon?.img" alt="" width="50" height="50" />
   
  </li> -->
  <div
    :class=" active? 'bg-primary' : '', pokemon.types[0].color "
    class="my-2 hover selectable card elevation-5"
    @click="getDetails(pokemon)"
  >
    <p class="mb-0 d-flex align-items-center ms-2">{{ pokemon?.name }}</p>
    <!-- <p v-for="t in pokemon?.types"> {{t?.type?.name}}</p> -->
    <p
      class="p-1 rounded text-center text-light fw-bold"
      v-for="t in pokemon.types"
      :class="t.color"
    >
      {{ t.type.name }}
    </p>
    <div class="d-flex justify-content-end">
      <img :src="pokemon?.img" alt="" width="90" height="90" />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";


import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { PokemonDetail } from "../models/PokemonDetail";
import { pokemonService } from "../services/PokemonService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    pokemon: { type: PokemonDetail },
  },
  setup(props) {
    const editable = ref({});

    onMounted(() => {
      // getTypeColor();
    });
    watchEffect(() => {});

    // function getTypeColor(name) {
    //   if (name == "grass") {
    //     return "bg-success";
    //   }
    // }

    return {
      editable,
      color23: computed(() => props.pokemon?.types.color),
      active: computed(
        () => AppState.activePokemon?.name == props.pokemon?.name
      ),
      async getDetails(pokemon) {
        try {
          AppState.activePokemon = pokemon;
          // let id = props.pokemon.id;
          // await pokemonService.getPokemonDetails(id);
        } catch (error) {
          Pop.error(error, "[getDetails]");
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.test2 {
  background-color: v-bind(color23);
}
.hover {
  transition: all 0.25s ease;
  padding: 3px;
  border-radius: 4px;
}
.hover:hover {
  transform: scale(1.07);
  transition: all 0.25s ease;
  filter: saturate(120%);
  filter: brightness(120%);
  background-color: rgba(128, 128, 128, 0.425);
}
</style>
