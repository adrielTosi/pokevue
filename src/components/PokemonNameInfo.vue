<template>
  <div>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-avatar rounded>
          <img class="poke-avatar" :src="info.sprites.front_default">
        </q-avatar>
      </q-item-section>
      <q-item-section>{{capitalizeFirstLetter(info.name)}}</q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  computed: {
    info() {
      return this.$store.state.pokeInfo.pokeInfo;
    }
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
};
</script>

