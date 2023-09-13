import Vue from 'vue';
import Vuetify from 'vuetify';

import {
	Wrapper,
	shallowMount,
	createLocalVue,
	createVuetifyInstance,
	installGlobalPlugins,
	mockTranslations
} from '@cnamts/vue-dot/src/helpers/testUtils';

import About from '../About.vue';

describe('About', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let vuetify: Vuetify;

	installGlobalPlugins(localVue);

	beforeEach(() => {
		vuetify = createVuetifyInstance();
	});

	it('renders correctly', () => {
		wrapper = shallowMount(About, {
			localVue,
			vuetify
		});

		expect(wrapper).toMatchSnapshot();
	});
});
