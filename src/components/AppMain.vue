<script>
import FilmCard from './FilmCard.vue';
export default {
    components: { FilmCard },
    data() {
        return {
        }

    },
    props: {
        films: Array
    }
}

</script>

<template>
    <h2>Film :</h2>
    <FilmCard v-for="film in films" :key="film.id" :film="film" />
</template>