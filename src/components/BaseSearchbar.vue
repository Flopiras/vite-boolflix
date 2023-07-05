<script>
export default {
    data() {
        return {
            term: '',
        }
    }
}
</script>

<template>
    <input type="text" placeholder="cerca" v-model="term">
    <button>Cerca</button>
</template>