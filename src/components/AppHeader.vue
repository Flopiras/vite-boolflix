<script>
import BaseSearchbar from './BaseSearchbar.vue';

export default {
    components: { BaseSearchbar },
    emits: ['searchFilms'],
    methods: {
        onButtonClicked(film) {
            this.$emit('searchFilms', film)
        }
    }
}

</script>

<template>
    <BaseSearchbar @buttonClicked="onButtonClicked" />
</template>