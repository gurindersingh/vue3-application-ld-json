import { h as r } from "vue";
const o = {
  props: {
    json: {
      type: String,
      default: () => JSON.stringify({ foo: "bar" })
    }
  },
  setup(t) {
    return () => r("script", {
      type: "application/ld+json",
      innerHTML: t.json
    });
  }
};
export {
  o as default
};
