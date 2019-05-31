import axios from 'axios';

export const getPokemon = ({ commit }, url) => {
  commit('toggleLoading')
  axios
    .get(url)
    .then(res => {
      commit('setErrors', {})
      commit('setPokemon', res.data)
      commit('toggleLoading')
    })
    .catch(() => {
      const error = { noPokemon: 'No pokemon found.' }
      commit('setErrors', error)
      commit('setPokemon', {})
      commit('toggleLoading')
    })
};
