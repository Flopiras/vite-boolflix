<script>
export default {
    data() {
        return {

        }
    },
    props: {
        film: Object
    },

}

</script>

<template>
    <ul>
        <li>Titolo: {{ film.title }}</li>
        <li>Titolo in lingua originale: {{ film.original_title }}</li>
        <li>Voto: {{ film.vote_average }}</li>
    </ul>
</template>