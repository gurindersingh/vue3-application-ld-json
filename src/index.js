import {h} from 'vue'

export default {
    props: {
        json: {
            type: String,
            default: () => JSON.stringify({foo: 'bar'})
        }
    },
    setup(props) {
        return () => {
            return h('script', {
                type: "application/ld+json",
                innerHTML: props.json,
            })
        }
    },
}
