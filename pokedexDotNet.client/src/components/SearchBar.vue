<template>
    <div class="row justify-content-center">
      <div class="col-md-6 d-fex align-items-center">
        <form @submit.prevent="searchByQuery()">

          <div class="input-group mb-3 rounded-5">
      <button class="btn  " type="submit" id="basic-addon1"><i class="mdi mdi-magnify fs-2"></i></button>
      <input v-model="editable" type="text" class="form-control rounded-5" :placeholder="editable.value" aria-label="Username" aria-describedby="basic-addon1"
      >
    </div>
        </form>
      </div>
    </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { pokemonService } from "../services/PokemonService.js";
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js";

export default {
props:{

       },
  setup(props) {
    const editable = ref({});
    
    onMounted(() => {

    });
    watchEffect(() => {});

    return {
      editable,
        async searchByQuery() {
              try {
                await  pokemonService.searchByQuery(editable.value);
              } catch (error) {
                
                Pop.error(error, "[searchByQuery]");
              }
            },
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
