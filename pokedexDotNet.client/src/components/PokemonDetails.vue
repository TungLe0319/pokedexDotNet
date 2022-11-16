<template>
  <div class="card">
    <img :src="details?.sprites?.front_default" alt="" />
    {{details?.sprites?.front_default}}
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
    };
  },
};
</script>

<style lang="scss" scoped></style>
