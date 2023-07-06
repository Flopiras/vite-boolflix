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
      console.log(searchedFilm)

      this.filterMovies(searchedFilm);
      this.filterSeries(searchedFilm)
    },

    filterMovies(searchedFilm) {
      const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=37fedf37163e8a1bd04c6b59fc4a607b&query=${searchedFilm}`;

      axios.get(endpoint).then(res => {
        store.movies = res.data.results;
      })
    },

    filterSeries(searchedFilm) {
      const endpoint = `https://api.themoviedb.org/3/search/tv?api_key=37fedf37163e8a1bd04c6b59fc4a607b&query=${searchedFilm}`;

      axios.get(endpoint).then(res => {
        store.series = res.data.results;
      })
    }
  }
}
</script>

<template>
  <div class="container">
    <AppHeader @search-films="fetchFilterFilm" />

    <AppMain :movies="store.movies" :series="store.series" />
  </div>
</template>

<style lang="scss">
@use './assets/scss/index.scss'
</style>