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
            this.$emit('buttonClicked', searchedTerm);
        }
    }
}
</script>

<template>
    <section class="d-flex align-items-baseline">

        <div class="m-3">
            <input v-model.trim="term" type="text" class="form-control" placeholder="Cerca...">
        </div>
        <button @click="clickOnButton" type="button" class="btn btn-primary">Cerca</button>
    </section>
</template>