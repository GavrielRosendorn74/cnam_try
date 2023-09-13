<template>
	<NotFoundPage />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Meta, MetaInfo } from '@/decorators';

	@Component
	export default class NotFound extends Vue {
		/* istanbul ignore next */
		@Meta
		metaInfo(): MetaInfo {
			return {
				title: 'Erreur 404',
				meta: [
					{
						name: 'description',
						vmid: 'description',
						content: 'Page non trouvée.'
					}
				]
			};
		}
	}
</script>
