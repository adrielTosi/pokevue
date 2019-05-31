<template>
  <div class="col-4 q-ma-md">
    <q-form @submit="onSubmit">
      <input class="q-pl-sm" :value="value" @input="$emit('input', $event.target.value)">
      <br>
      <small class="q-ma-sm">Search by pokemon name.</small>
      <br>
      <small class="text-deep-orange q-ma-sm" v-if="errorMessage">{{errorMessage}}</small>

      <q-btn
        color="secondary"
        icon-right="search"
        class="q-mt-md float-right q-pa-none q-px-sm"
        type="submit"
      />
    </q-form>
  </div>
</template>

<script>
export default {
  props: ["value", "errorMessage"],
  methods: {
    onSubmit() {
      this.$emit("searchByPokemon", this.pokemon);
    },
    handleChange() {
      this.$emit("onChange");
    }
  }
};
</script>

