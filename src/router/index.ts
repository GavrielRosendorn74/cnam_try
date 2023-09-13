import Vue from 'vue';

import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';

import { store } from '@/store';

import { scrollBehavior } from '@cnamts/vue-dot/src/helpers/scrollBehavior';
import { navigationRedirect } from './navigationRedirect';
import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(VueMeta, {
	refreshOnceOnNavigation: true
});

const router = new VueRouter({
	mode: 'history', // Use the History API, and remove the hash from the URL
	routes,
	scrollBehavior
});

router.beforeEach(async(to, from, next) => {
	// Remove notification
	store.dispatch('notification/clear');

	navigationRedirect(to, from, next);
});

export { router };
