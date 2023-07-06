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
    <main>
        <div class="container">
            <h2 class="my-3">Film :</h2>
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
                <div v-for="movie in movies" :key="movie.id" class="col">
                    <FilmCard :film="movie" />
                </div>
            </div>

            <h2 class="my-3">Serie TV :</h2>
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
                <div v-for="serie in series" :key="serie.id" class="col">
                    <FilmCard :film="serie" />

                </div>
            </div>
        </div>
    </main>
</template>