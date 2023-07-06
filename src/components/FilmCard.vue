<script>
export default {
    data() {
        return {

        }
    },
    props: {
        film: Object
    },
    computed: {
        hasFlag() {
            const flags = ['it', 'en'];
            return flags.includes(this.film.original_language)
        },

        imageFlagSrc() {
            const url = new URL(`../assets/img/${this.film.original_language}.png`, import.meta.url);
            return url.href
        },

        imagePosterSrc() {
            const url = new URL(`https://image.tmdb.org/t/p/w342/${this.film.poster_path}`);
            return url.href
        }
    }
}

</script>

<template>
    <ul>
        <li><img :src="imagePosterSrc" alt=""></li>
        <li>Titolo: {{ film.title || film.name }}</li>
        <li>Titolo in lingua originale: {{ film.original_title || film.original_name }}</li>
        <li>
            <img v-if="hasFlag" :src="imageFlagSrc" :alt="film.original_language">
            <span v-else>Lingua: {{ film.original_language }}</span>
        </li>
        <li>Voto: {{ film.vote_average }}</li>
    </ul>
</template>