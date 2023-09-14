<template>
	<FormField
		:type="'text'"
		:value="null"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	const Props = Vue.extend({
		props: {
			hiddenText: {
				type: String,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class FormFieldText extends MixinsDeclaration {
		field: Field = {
			type: 'text',
			value: null,
			fieldOptions: {
				label: this.hiddenText,
				hideDetails: true,
				outlined: true
			}
		};
	}
</script>