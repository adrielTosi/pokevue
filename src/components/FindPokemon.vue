<template>
  <div class="q-mt-md row justify-center">
    <FindPokemonForm @searchByPokemon="searchByPokemon" v-model="pokemon" :errorMessage="error"/>
    <Pokedex/>
  </div>
</template>

<script>
import Pokedex from "./Pokedex";
import FindPokemonForm from "./FindPokemonForm";
export default {
  data: () => ({
    pokemon: "",
    error: ""
  }),
  components: {
    Pokedex,
    FindPokemonForm
  },
  methods: {
    searchByPokemon() {
      if (this.pokemon.length === 0) {
        this.error = "Search cannot be empty.";
      } else {
        this.error = ""
        this.$store.dispatch("pokeInfo/getPokemon", this.apiQuery);
      }
    }
  },
  computed: {
    apiQuery() {
      return `https://pokeapi.co/api/v2/pokemon/${this.pokemon}`;
    }
  }
};
</script>

<style>
input {
  width: 100%;
  border: none;
  border-bottom: 1px solid lightgray;
}
</style>
