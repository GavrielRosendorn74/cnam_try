<template>
	<PageContainer>
		<VCard class="pa-8">
			<VBtn
				:to="{
					name: 'home'
				}"
				color="accent"
				class="mb-8"
				outlined
				exact
				data-cy="backBtn"
			>
				<VIcon class="mr-2">
					{{ backArrowIcon }}
				</VIcon>

				Retour
			</VBtn>

			<h2 class="text-h6 font-weight-bold primary--text">
				À propos
			</h2>

			<LinksList
				v-for="(data, index) in links"
				:key="index"
				:title="data.title"
				:links="data.links"
				class="mt-4"
				data-cy="links"
			/>
		</VCard>
	</PageContainer>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Meta, MetaInfo } from '@/decorators';

	import { LinkItem } from '@/types';

	import { mdiArrowLeft } from '@mdi/js';

	@Component({
		components: {
			LinksList: () => import(
				/* webpackChunkName: "links-list" */
				'@/components/LinksList'
			)
		}
	})
	export default class About extends Vue {
		backArrowIcon = mdiArrowLeft;

		links: LinkItem[] = [
			{
				title: 'CNAM',
				links: [
					{
						id: 0,
						url: 'https://github.com/assurance-maladie-digital/design-system',
						name: 'Design System'
					}
				]
			},
			{
				title: 'Vue.js',
				links: [
					{
						id: 0,
						url: 'https://vuejs.org/',
						name: 'Core Docs'
					},
					{
						id: 1,
						url: 'https://forum.vuejs.org/',
						name: 'Forum'
					}
				]
			},
			{
				title: 'Vuetify',
				links: [
					{
						id: 0,
						url: 'https://vuetifyjs.com/',
						name: 'Vuetify'
					}
				]
			},
			{
				title: 'Écosystème',
				links: [
					{
						id: 0,
						url: 'http://router.vuejs.org/',
						name: 'Vue Router'
					},
					{
						id: 1,
						url: 'http://vuex.vuejs.org/',
						name: 'Vuex'
					},
					{
						id: 2,
						url: 'https://github.com/vuejs/awesome-vue',
						name: 'Awesome Vue'
					}
				]
			}
		];

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
