import { Plugin } from '@nuxt/types';

type Url = string;
interface SlugToUrl {
  (slug: string): Url;
}

interface UsernameToUrl {
  (username: string): Url;
}
interface ApiUrl {
  getArticle: SlugToUrl;
  favoriteArticle: SlugToUrl;
  followUser: UsernameToUrl;
}
declare module 'vue/types/vue' {
  interface Vue {
    $apiUrl: ApiUrl;
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $apiUrl: ApiUrl;
  }
}
const apiPlugin: Plugin = ({ $config: { apiURL } }, inject) => {
  const articleUrl = (slug: string) => `${apiURL}/api/articles/${slug}`;
  const profileUrl = (username: string) => `${apiURL}/api/profiles/${username}`;
  inject('apiUrl', {
    getArticle: (slug: string) => articleUrl(slug),
    favoriteArticle: (slug: string) => `${articleUrl(slug)}/favorite`,
    folllowUser: (username: string) => `${profileUrl(username)}/follow`,
  });
};

export default apiPlugin;
