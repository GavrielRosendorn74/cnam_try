<template>
	<PageContainer>
		<VCard class="pa-8">
			<h2 class="text-h6 font-weight-bold primary--text mb-4">
				Premiers pas
			</h2>

			<p>Vous venez de créer une nouvelle application front-end avec Vue Dash.</p>

			<p>Tout est prêt, vous pouvez commencer à développer&nbsp;!</p>

			<RouterLink
				:to=" {
					name: 'about'
				}"
				data-cy="aboutLink"
			>
				À propos
			</RouterLink>

			<VSpacer />

			<VBtn
				color="accent"
				outlined
				height="auto"
				min-height="36px"
				class="text-wrap mt-8"
				data-cy="sendNotification"
				@click="sendNotification"
			>
				Envoyer une notification exemple
			</VBtn>
		</VCard>
	</PageContainer>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Meta, MetaInfo } from '@/decorators';

	import { mapActions } from 'vuex';

	@Component({
		// Vuex bindings
		methods: mapActions('notification', ['addNotification'])
	})
	export default class Home extends Vue {
		/* istanbul ignore next */
		sendNotification(): void {
			this.addNotification({
				type: 'success',
				message: 'Exemple de notification'
			});
		}

		/* istanbul ignore next */
		@Meta
		metaInfo(): MetaInfo {
			return {
				title: 'Premiers pas',
				meta: [
					{
						name: 'description',
						vmid: 'description',
						content: 'Votre nouvelle application Vue Dash.'
					}
				]
			};
		}
	}
</script>
