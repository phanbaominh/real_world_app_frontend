import dayjs from 'dayjs';
import { Plugin } from '@nuxt/types';
declare module 'vue/types/vue' {
  // this.$myInjectedFunction inside Vue components
  interface Vue {
    $formatDate: (date: Date, format?: string) => string;
  }
}

const dayjsPlugin: Plugin = (_, inject) => {
  inject('formatDate', (date: Date, format = 'MMMM D, YYYY') =>
    dayjs(date).format(format)
  );
};

export default dayjsPlugin;
