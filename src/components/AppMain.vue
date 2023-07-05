<script>
export default {
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
    <ul>
        <li v-for="film in films">
            <ul>
                <li>Titolo: {{ film.title }}</li>
                <li>Titolo in lingua originale: {{ film.original_title }}</li>
                <li>Lingua: {{ film.original_language }}</li>
                <ul>Voto: {{ film.vote_average }}</ul>
            </ul>
        </li>
    </ul>
</template>