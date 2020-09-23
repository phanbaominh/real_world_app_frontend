<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  functional: true,
  props: {
    color: {
      type: String,
      default: 'conduit-green',
    },
  },
  render(h, { props: { color }, children, listeners, data }) {
    const buttonClasses = `text-sm self-start lg:text-base text-${color} border-2 border-${color} p-2 rounded-md hover:text-white hover:bg-${color} `;
    return h(
      'button',
      {
        class: buttonClasses + (data.class.active ? 'active' : ''),
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
