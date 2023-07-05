<script>
import BaseSearchbar from './BaseSearchbar.vue';


export default {
    components: { BaseSearchbar },
    data() {
        return {

        }
    },
    emits: ['search-films'],
    methods: {
        filmSearch(searchedFilm) {
            this.$emit('search-films', searchedFilm)
        }
    }
}

</script>

<template>
    <BaseSearchbar @buttonClicked="filmSearch" />
</template>