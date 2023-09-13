import Vue from 'vue';

// Polyfill for vue-input-facade on IE
// (not included in core-js)
import 'custom-event-polyfill';

// Register class components hooks
import Component from 'vue-class-component';

Component.registerHooks([
	'beforeRouteEnter',
	'beforeRouteLeave',
	'beforeRouteUpdate'
]);

// Import plugins
import { vuetify } from './plugins/vuetify';
import './plugins/vue-dot';
import './plugins/form-builder';

// Import the theme styles
import '@/theme/styles.scss';

// Import application parts
import App from './App.vue';
import { router } from './router';
import { store } from './store';

import { MAINTENANCE_ENABLED } from './constants';

// Remove "tip" from browser console
Vue.config.productionTip = false;
// Add global var for maintenance
Vue.prototype.$maintenanceEnabled = MAINTENANCE_ENABLED;

// Mute slugify error
Vue.config.silent = true;

// Create main Vue instance
new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App)
}).$mount('#app'); // Mount it on #app (in public/index.html)
