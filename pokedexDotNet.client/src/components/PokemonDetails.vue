<template>
  <div class="card border-0 bg-transparent">
    <img :src="img" alt="" v-if="img" />
 <div class="card-body">
<span class=" rounded p-1 bg-danger" v-for="i in details.types">{{i.type.name}}</span>
 </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {},
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
