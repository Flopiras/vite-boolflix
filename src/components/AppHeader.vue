<script>
import BaseSearchbar from './BaseSearchbar.vue';


export default {
    components: { BaseSearchbar },
    data() {
        return {

        }
    },
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