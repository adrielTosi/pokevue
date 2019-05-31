export function setPokemon (state, payload) {
  state.pokeInfo = payload
}
export function toggleLoading (state) {
  state.loading = !state.loading
}
export function setErrors (state, payload) {
  state.errors = payload
}
