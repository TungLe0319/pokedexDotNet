<template>
  <!-- <div class="card border-0 bg-transparent d-flex flex-column align-items-center" v-if="pokemon">
  
    <div class="card-body d-flex justify-content-center">
      <div
        class="rounded-5 p-2 mx-auto"
        v-for="i  in pokemon.types"
        :class="i?.type?.name == 'fire' ? 'bg-danger' : 'bg-primary'"
      >
        <h6>{{ i?.type?.name }}</h6>
      </div>
    </div>
  </div> -->
  <div class="card mt-2 rounded-4 position-relative w-100 p-3">
    <div class="pokemonImg">
      <img :src="pokemon?.img" alt="" height="200" width="200" />
    </div>

 
<div class="d-flex">
  <button
      class="btn border-0 border-bottom "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseStats"
      aria-expanded="false"
      aria-controls="collapseStats"
    >
      stats
    </button>
      <button
      class="btn border-0 border-bottom "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseAbilities"
      aria-expanded="false"
      aria-controls="collapseStats"
    >
      Abilities
    </button>
      <button
      class="btn border-0 border-bottom "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseEvolutions"
      aria-expanded="false"
      aria-controls="collapseStats"
    >
      Evolutions
    </button>
</div>



    <div class="collapse" id="collapseStats">
      <div class="card-body">
        <ul class="list-group border-0">
          <li v-for="i in pokemon?.stats" class="list-group-item">
            <b>{{ i?.stat?.name }}</b>
            <div class="d-flex justify-content-between">
              <div class="progress w-75">
                <div
                  class="progress-bar test"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow=""
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :style="{ width: i?.base_stat + '%' }"
                >
                  {{ i?.base_stat }}
                </div>
              </div>
              <p class="mb-0 opacity-75 me-3">100</p>
            </div>
          </li>
        </ul>
      </div>
    </div>


       <div class="collapse" id="collapseAbilities">
      <div class="card-body">
        <ul class="list-group border-0">
          <li v-for="i in pokemon?.abilities" class="list-group-item">
            <img :src="i?.ability.url" alt="" width="30" height="30">
            <b>{{ i.ability.name }}</b>
          
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { PokemonDetail } from "../models/PokemonDetail.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    pokemon: {
      type: PokemonDetail,
    },
  },
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
      bar: computed(() => props?.pokemon?.stats?.map((s) => s.base_stat)),
      details: computed(() => AppState.activePokemon),
      img: computed(
        () =>
          AppState.activePokemon?.sprites.other["official-artwork"]
            .front_default
      ),
    };
  },
};
</script>

<style lang="scss" scoped>
.pokemonImg {
  position: absolute;
  top: -120px;
  right: -85px;
  z-index: 9;
}
.test {
  width: v-bind(bar);
}
</style>
