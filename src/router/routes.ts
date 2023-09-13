// Disable return types for import functions
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// Directly import Home view for faster rendering of first page
import Home from '@/views/Home.vue';

/** @see https://router.vuejs.org/fr/essentials/navigation.html for help */
export const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
  {
		path: '/simulateur',
		name: 'simulateur',
		component: () => import(
			/* webpackChunkName: "about" */
			'@/views/About.vue'
		)
	},
	{
		path: '/a-propos',
		name: 'about',
		component: () => import(
			/* webpackChunkName: "about" */
			'@/views/About.vue'
		)
	},
	{
		path: '/maintenance',
		name: 'maintenance',
		component: () => import(
			/* webpackChunkName: "maintenance" */
			'@/views/Maintenance.vue'
		)
	},
	{
		path: '*', // Everything that doesn't match a route
		name: 'notFound',
		component: () => import(
			/* webpackChunkName: "not-found" */
			'@/views/NotFound.vue'
		)
	}
];
