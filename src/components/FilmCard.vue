<script>
export default {
    data() {
        return {
            isFocused: false
        }
    },
    props: {
        film: Object
    },
    computed: {
        hasFlag() {
            const flags = ['it', 'en'];
            return flags.includes(this.film.original_language)
        },

        imageFlagSrc() {
            const url = new URL(`../assets/img/${this.film.original_language}.png`, import.meta.url);
            return url.href
        },

        imagePosterSrc() {
            const url = new URL(`https://image.tmdb.org/t/p/w342/${this.film.poster_path}`);
            return url.href
        },

        vote() {

            return Math.ceil(this.film.vote_average / 2);
        }
    }
}

</script>

<template>
    <div @mouseenter="isFocused = true" @mouseleave="isFocused = false" class="card mb-2">
        <figure>
            <img id="poster" :src="imagePosterSrc" alt="">

            <figcaption>
                <p>Titolo : <span class="h5">{{ film.original_title || film.original_name
                }}</span>
                </p>
            </figcaption>
        </figure>
        <div v-if="isFocused" id="info">

            <ul>
                <li>
                    <p>Titolo: <span class="h5">{{ film.title || film.name }}</span> </p>
                </li>
                <li>
                    <p>Titolo in lingua originale: <span class="h5">{{ film.original_title || film.original_name }}</span>
                    </p>
                </li>
                <li>
                    <img id="flag" v-if="hasFlag" :src="imageFlagSrc" :alt="film.original_language">
                    <span v-else>Lingua: {{ film.original_language }}</span>
                </li>
                <li>
                    <i v-for="n in 5" :key="n" :class="n <= vote ? 'fas' : 'far'" class="fa-star"></i>
                </li>
            </ul>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/vars' as *;

.card {
    display: flex;
    height: 430px;
}

figcaption {
    p {
        margin: 1rem 2rem 1rem 2rem;
    }
}

#poster {
    display: block;
    height: 300px;
    margin: 10px auto;
}

#flag {
    display: block;
    width: 100px;
}

#info {
    font-size: 1.2rem;
    position: absolute;
    background-color: black;
    opacity: 0.8;
    color: white;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

ul {
    padding: 0;

    i {
        color: $star;
    }
}
</style>