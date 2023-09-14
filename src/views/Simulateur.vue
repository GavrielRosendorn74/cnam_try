<template>
	<PageContainer>
		<VCard
			v-if="step === 0"
			class="pa-8"
		>
			<h2 class="text-h6 font-weight-bold primary--text mb-4">
				Simulateur de prise en charge
			</h2>

			<div>
				<FormField v-model="firstNameField" />
				<FormField v-model="lastNameField" />
				<FormField v-model="birthdateField" />
				<FormField v-model="intervMedicaleField" />
			</div>

			<VBtn
				color="rgb(10, 52, 123)"
				height="auto"
				min-height="36px"
				class="text-wrap mt-8"
				data-cy="sendNotification"
				dark
				@click="confirm"
			>
				SIMULER
			</VBtn>
		</VCard>
		<VCard
			v-if="step === 1"
			class="pa-8"
		>
			<h2 class="text-h6 font-weight-bold primary--text mb-4">
				Simulateur de prise en charge
			</h2>

			<div>
				<DataList
					:items="[
						{
							key: 'Nom',
							value: lastNameField.value,
						},
						{
							key: 'Prénom',
							value: firstNameField.value,
						},
						{
							key: 'Date de naissance',
							value: birthdateField.value,
						},
						{
							key: 'Intervention',
							value: textIntervMedical(),
						},
						{
							key: 'Taux de prise en charge',
							value: taux() + '%',
						}
					]"
				/>
			</div>

			<VBtn
				color="rgb(10, 52, 123)"
				height="auto"
				min-height="36px"
				class="text-wrap mt-8"
				data-cy="sendNotification"
				dark
				@click="stepBack"
			>
				REVENIR
			</VBtn>
		</VCard>
	</PageContainer>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { Meta, MetaInfo } from '@/decorators';
	import { Field } from '@cnamts/form-builder/src/components/FormField/types';
	import { mapActions } from 'vuex';

	@Component({
		methods: mapActions('notification', ['addNotification', 'clearNotification'])
	})
	export default class Simulateur extends Vue {
		step = 0;
		// FORMULAIRE
		birthdateField: Field = {
			type: 'date',
			value: null,
			fieldOptions: {
				label: 'Votre date de naissance',
				outlined: true
			}
		};

		firstNameField: Field = {
			type: 'text',
			value: null,
			fieldOptions: {
				label: 'Votre prénom',
				hideDetails: true,
				outlined: true
			}
		};

		lastNameField: Field = {
			type: 'text',
			value: null,
			fieldOptions: {
				label: 'Votre nom',
				hideDetails: true,
				outlined: true
			}
		};

		intervMedicaleField: Field = {
			type: 'select',
			dynamic: true,
			items: [
				{
					text: 'Consultation génerale',
					value: 'general'
				},
				{
					text: 'Consultation Ophtalmologue',
					value: 'ophtalmo'
				},
				{
					text: 'Consultation de santé sexuelle',
					value: 'sexual'
				}
			],
			value: null,
			fieldOptions: {
				label: 'Intervention médicale',
				hideDetails: true,
				outlined: true
			}
		};

		textIntervMedical(): string {
			if (this.intervMedicaleField?.value == null) return 'Aucune';
			return this?.intervMedicaleField?.items?.find((e) => e.value === this.intervMedicaleField?.value?.value)?.text || '';
		}

		taux(intermed: string): number {
			switch (intermed) {
				case 'sexual':
					return 100;
				default:
					return 70;
			}
		}

		confirm(): void {
			if (this.intervMedicaleField?.value == null) {
				this.addNotification({
					type: 'error',
					message: 'Veuillez choisir une intervention médicale.'
				});
				return ;
			}
			this.step = 1;
		}

		stepBack(): void {
			this.step = 0;
		}

		@Meta
		metaInfo(): MetaInfo {
			return {
				title: 'Simulateur',
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
