<template>
	<HeaderBar
		service-title="Mon simulateur de prise en charge"
		:navigation-items="navigationItems"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { NavigationItem } from '@cnamts/vue-dot/src/patterns/HeaderBar/types';

	@Component
	export default class AppHeader extends Vue {
		get navigationItems(): NavigationItem[] | null {
			if (this.$maintenanceEnabled) {
				return null;
			}

			return [
				{
					label: 'Acceuil',
					to: {
						name: 'home'
					}
				},
				{
					label: 'Le simulateur',
					to: {
						name: 'simulateur'
					}
				},
				{
					label: 'À propos',
					to: {
						name: 'about'
					}
				}
			];
		}
	}
</script>
