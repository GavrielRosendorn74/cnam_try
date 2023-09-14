<template>
	<PageContainer>
		<VCard class="pa-8">
			<h2 class="text-h6 font-weight-bold primary--text">
				À propos
			</h2>
			<br>
			<p>
				Ce site a été créé dans le but de tester le template de la CNAM.<br>
				Les donnnées du simulateur sont tirées du <a href="https://www.ameli.fr/haute-savoie/assure/remboursements/rembourse/consultations-telemedecine">site ameli</a>.
			</p>
			<h2 class="text-h6 font-weight-bold primary--text">
				Contributeurs
			</h2>
			<p>
				Gabriel Rosendorn
			</p>
		</VCard>
	</PageContainer>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Meta, MetaInfo } from '@/decorators';

	@Component({
		components: {
		}
	})
	export default class About extends Vue {
		/* istanbul ignore next */
		@Meta
		metaInfo(): MetaInfo {
			return {
				title: 'À propos',
				meta: [
					{
						name: 'description',
						vmid: 'description',
						content: 'Informations et liens utiles.'
					}
				]
			};
		}
	}
</script>
