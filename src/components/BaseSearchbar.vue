<script>
export default {
    data() {
        return {
            term: '',
        }
    },
    emits: ['buttonClicked'],
    methods: {
        clickOnButton() {
            const searchedTerm = this.term;
            this.$emit('button-clicked', searchedTerm);
        }
    }
}
</script>

<template>
    <input type="text" placeholder="cerca" v-model.trim="term">
    <button @click="clickOnButton" type="submit">Cerca</button>
</template>