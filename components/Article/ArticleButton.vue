<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  functional: true,
  props: {
    color: {
      type: String,
      default: 'conduit-green',
    },
    eClass: {
      type: String,
      default: '',
    },
  },
  render(h, { props: { color, eClass }, children, listeners }) {
    return h(
      'button',
      {
        attrs: {
          class:
            `text-${color} border-2 border-${color} p-1 px-2 rounded-md hover:text-white hover:bg-${color} ` +
            eClass,
        },
        on: {
          click: () => {
            if (Array.isArray(listeners.click))
              listeners.click.forEach((listener) => listener());
            else if (listeners.click) listeners.click();
          },
        },
      },
      children
    );
  },
});
</script>
