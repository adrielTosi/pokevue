<template>
  <q-layout view="hhh lpR lFf">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="row items-center">
          <q-avatar class="q-mr-sm">
            <img width="50" src="~/assets/pokemon-logo.png">
          </q-avatar>PokeVue
        </q-toolbar-title>
        <q-tabs dense v-model="tab" align="right" class="q-pr-lg">
          <q-route-tab name="find" to="/" label="Find"/>
          <q-route-tab name="pokedex" to="/pokedex" label="Pokedex"/>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";

export default {
  name: "MyLayout",
  data() {
    return {
      tab: "find"
    };
  },
  methods: {
    openURL
  }
};
</script>

<style>
* {
  font-family: "Montserrat";
}
.container {
  width: 80%;
}
</style>
