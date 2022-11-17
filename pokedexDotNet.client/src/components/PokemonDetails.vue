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
    <div>Stats</div>
    <div class="pokemonImg">
      <img :src="pokemon?.img" alt="" height="200" width="200" />
    </div>
    <div>
      <ul class="list-group">
        <li v-for="i in pokemon?.stats" class="list-group-item ">
          <b>{{ i?.stat?.name }}</b>

          <div class="progress">
            <div
              class="progress-bar test"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow=""
              aria-valuemin="0"
              aria-valuemax="100"
            :style="{ 'width': i?.base_stat + '%' }"
            >
              {{ i?.base_stat }}
            </div>
          </div>
          <p class="mb-0 opacity-75">{{ i?.base_stat }}</p>
        </li>
      </ul>
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
  top: -100px;
  right: -90px;
  z-index: 9;
}
.test {
  width: v-bind(bar);
}
</style>
