<template>
	<!-- VApp is an element which is required to use Vuetify. @see https://vuetifyjs.com/en/ for help -->
	<VApp v-cloak>
		<AppHeader />

		<NotificationBar data-cy="notificationBar" />

		<VMain>
			<!-- Transition between routes -->
			<transition
				name="fade"
				mode="out-in"
			>
				<!-- Load the component defined in the router for the current route -->
				<RouterView />
			</transition>
		</VMain>

		<AppFooter v-if="!$maintenanceEnabled" />
	</VApp>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Meta, MetaInfo } from '@/decorators';

	// Static import for faster rendering
	import { AppHeader, AppFooter } from '@/components/layout';

	/** App is the main component */
	@Component({
		components: {
			AppHeader,
			AppFooter
		}
	})
	export default class App extends Vue {
		/** The meta informations of the route */
		/* istanbul ignore next */
		@Meta
		metaInfo(): MetaInfo {
			return {
				// If a sub-components does not specifies metaInfo.title, this title will be used
				title: 'Mon_simulateur_de_prise_en_charge',
				// All titles will be injected into this template
				titleTemplate: '%s | CNAM',
				meta: [
					{
						name: 'description',
						vmid: 'description', /** Used to avoid duplicated tags @see https://vue-meta.nuxtjs.org/faq/#unique-metadata */
						content: 'Un simulateur permettant de savoir sur chaque type d&#39;intervation medicale quel est le montant ant pris en charge par l&#39;assurance maladie..'
					}
				]
			};
		}
	}
</script>

<style lang="scss">
	$color-pack: false;

	@import '~vuetify/src/styles/main.sass';
</style>
