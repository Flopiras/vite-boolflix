import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStarSolid as faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarRegular as faStar } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(faStar)


createApp(App)
.component('faStarSolid', 'faStarRegular', FontAwesomeIcon)
.mount('#app')
