<template>
  <div class="card border-0 bg-transparent" v-if="pokemon">
    <img :src="pokemon.img" alt=""  />
 <div class="card-body d-flex justify-content-center">
<div class=" rounded-5 p-2 mx-auto " v-for="i in details?.types"
:class="i?.type?.name =='fire'? 'bg-danger' :'bg-primary' "
>   <h6>{{i?.type?.name}}</h6>  </div>
 </div>
  </div>
  <div class="card mt-2 rounded-4">
    <div>Stats</div>
    <div>
      <ul>
        <li v-for="i in details?.stats">{{i?.stat?.name}}  {{i?.base_stat}}</li>
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
    pokemon:{
      type:PokemonDetail
    }
  },
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
      details: computed(() => AppState.activePokemon),
      img: computed(() => AppState.activePokemon?.sprites.other["official-artwork"].front_default)
    };
  },
};
</script>

<style lang="scss" scoped></style>
