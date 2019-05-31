<template>
  <div class="col-6 q-ma-md">
    <div class="pokedex">
      <div v-if="loading" class="text-center q-mt-lg">
        <q-spinner-ball color="secondary" size="2em"/>
      </div>
      <div v-else-if="!isErrorEmpty" class="text-center q-mt-md">
        <p class="text-body1">{{error.noPokemon}}</p>
      </div>
      <div v-else-if="info !== null && !isInfoEmpty">
        <PokemonNameInfo/>
      </div>
      <div v-else class="text-center q-mt-md">
        <p class="text-body1">No data yet...</p>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonNameInfo from "./PokemonNameInfo";
export default {
  components: {
    PokemonNameInfo
  },
  computed: {
    info() {
      return this.$store.state.pokeInfo.pokeInfo;
    },
    loading() {
      return this.$store.state.pokeInfo.loading;
    },
    error() {
      return this.$store.state.pokeInfo.errors;
    },
    isErrorEmpty() {
      const error = this.$store.state.pokeInfo.errors;
      if (Object.keys(error).length === 0) return true;
      return false;
    },
    isInfoEmpty() {
      const info = this.$store.state.pokeInfo.pokeInfo;
      if (Object.keys(info).length === 0) return true;
      return false;
    }
  },
  methods: {
    ucFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
};
</script>

<style>
.pokedex {
  height: 80vh;
  border: 3px solid #e93d3d;
  border-radius: 8px;
}
.upper {
  background-color: #e93d3d;
  height: 8%;
}
</style>
