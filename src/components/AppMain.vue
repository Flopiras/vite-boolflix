<script>
import FilmCard from './FilmCard.vue';
export default {
    components: { FilmCard },
    data() {
        return {
        }

    },
    props: {
        movies: Array,
        series: Array
    }
}

</script>

<template>
    <h2>Film :</h2>
    <FilmCard v-for="movie in movies" :key="movie.id" :film="movie" />

    <h2>Serie TV :</h2>
    <FilmCard v-for="serie in series" :key="serie.id" :film="serie" />
</template>