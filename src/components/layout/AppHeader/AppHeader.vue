<template>
	<HeaderBar
		service-title="Projet mon_simulateur_de_prise_en_charge"
		:navigation-items="navigationItems"
	>
		<UserMenuBtn
			v-if="!$maintenanceEnabled"
			full-name="Utilisateur"
			additional-information="Développeur"
		>
			<VListItem
				v-for="(item, index) in navigationItems"
				:key="index"
				:disabled="item.disabled"
				:to="item.to ? item.to : null"
				exact
			>
				<VListItemTitle>{{ item.label }}</VListItemTitle>
			</VListItem>
		</UserMenuBtn>
	</HeaderBar>
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
					label: 'Accueil',
					to: {
						name: 'home'
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
