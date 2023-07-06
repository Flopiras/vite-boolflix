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
        <section id="movies" class="py-3">
            <div class="container">
                <h2 class="pb-2">Film :</h2>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
                    <div v-for="movie in movies" :key="movie.id" class="col">
                        <FilmCard :film="movie" />
                    </div>
                </div>
            </div>
        </section>
        <section id="series" class="py-3">
            <div class="container">
                <h2 class="pb-2">Serie TV :</h2>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
                    <div v-for="serie in series" :key="serie.id" class="col">
                        <FilmCard :film="serie" />

                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/vars' as *;

#movies {
    background-color: $bg-movies;
}

.card {
    border: 1px solid black;
}

#series {
    background-color: $bg-series;
}
</style>