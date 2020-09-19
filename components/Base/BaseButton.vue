<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
  functional: true,
  props: {
    oClass: {
      type: String,
      default: '',
    } as PropOptions<string>,
  },
  render(h, context) {
    return h(
      'button',
      {
        attrs: {
          class:
            'rounded-md p-2 text-white bg-conduit-green hover:bg-green-700 ' +
            context.props.oClass,
        },
      },
      context.children
    );
  },
});
</script>
