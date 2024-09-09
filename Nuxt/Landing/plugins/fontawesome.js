import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowCircleUp,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add the icons to the library
library.add(faArrowCircleUp, faSun, faMoon);

export default defineNuxtPlugin((nuxtApp) => {
  // Register the FontAwesomeIcon component globally
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
