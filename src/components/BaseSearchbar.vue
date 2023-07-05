<script>
export default {
    data() {
        return {
            term: '',
        }
    },
    emits: ['buttonClicked']
}
</script>

<template>
    <input type="text" placeholder="cerca" v-model="term">
    <button @click="$emit('buttonClicked', term)">Cerca</button>
</template>