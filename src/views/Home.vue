<template>
	<PageContainer>
		<VCard class="pa-8">
			<h2 class="text-h6 font-weight-bold primary--text mb-4">
				Bienvenue sur mon simulateur de prise en charge !
			</h2>

			<p>L'objectif de cette application est de permettre à chaque citoyen de connaitre ses droits en terme de prise en charge.</p>

			<p>Vous pouvez essayez le simulateur dès maintenant ici :</p>

			<RouterLink
				:to=" {
					name: 'about'
				}"
				data-cy="aboutLink"
			>
				<VBtn
					color="rgb(10, 52, 123)"
					height="auto"
					min-height="36px"
					class="text-wrap mt-8"
					data-cy="sendNotification"
					dark
					@click="sendNotification"
				>
					Envoyer une notification exemple
				</VBtn>
			</RouterLink>
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
				title: 'Accueil',
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
