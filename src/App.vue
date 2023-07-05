<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from '../src/data/store';

export default {
  name: 'Boolflix',
  data() {
    return {
      store
    }
  },
  components: { AppHeader, AppMain },
  methods: {
    fetchFilterFilm(searchedFilm) {
      const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=37fedf37163e8a1bd04c6b59fc4a607b&query=${searchedFilm}`;

      axios.get(endpoint).then(res => {
        store.films = res.data.results;

        console.log(searchedFilm)
      })
    }
  }
}
</script>

<template>
  <AppHeader @search-films="fetchFilterFilm" />

  <AppMain :films="store.films" />
</template>

<style></style>