<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';

export default {
  name: 'Boolflix',
  components: { AppHeader, AppMain },
  methods: {
    fetchFilterFilm(film) {

    }
  }
}
</script>

<template>
  <AppHeader @onButtonClicked="fetchFilterFilm" />

  <AppMain />
</template>

<style></style>