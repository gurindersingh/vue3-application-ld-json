import { mount } from "@vue/test-utils";
import JsonLd from '../src/index'

test("mount component", async () => {
    expect(JsonLd).toBeTruthy();

    const wrapper = mount(JsonLd, {
        props: {
            json: JSON.stringify({ foo: 'bar' }),
        },
    });

    expect(wrapper.text()).toContain('{"foo":"bar"}');
})