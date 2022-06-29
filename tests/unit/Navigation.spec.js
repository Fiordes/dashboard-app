import { mount } from '@vue/test-utils';
import Navigation from '@/components/Navigation.vue';


describe('Navigation.vue', () => {
    it('Should render logo', () => {
        const wrapper = mount(Navigation, {
            setup() {
                const user = 'User'
            }
        });


        expect(wrapper.find('.site-logo').exists()).toBe(true);
    });
});
