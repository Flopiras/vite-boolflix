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
    <header>
        <div class="container d-flex justify-content-between align-items-center">
            <img id="logo" src="../../public/logo.png" alt="">
            <BaseSearchbar @buttonClicked="filmSearch" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/vars' as *;

header {
    height: 5rem;
    background-color: $bg-header;
}
</style>