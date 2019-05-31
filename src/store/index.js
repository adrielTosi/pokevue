import Vue from 'vue';
import Vuex from 'vuex';

import pokeInfo from './pokemonInfo';

Vue.use(Vuex)

const Store = new Vuex.Store({
  modules: {
    pokeInfo
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
})
export default Store
