<template>
<li class="d-flex justify-content-between my-2">
<img width="30" height="30" src="https://cdn-icons-png.flaticon.com/512/361/361998.png" alt="">
<p class="mb-0 d-flex align-items-center ms-2">{{pokemon.name}}</p>
  <img :src="pokemon.img" alt="" width="50" height="50">
              <!-- <img src="/resources/pokeball.png" alt="" style="width:1rem;" class="me-1">  -->
</li>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js";

export default {
props:{
pokemon:{type:Object}
       },
  setup(props) {
    const editable = ref({});
    
    onMounted(() => {

    });
    watchEffect(() => {});

    return {
      editable,
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
