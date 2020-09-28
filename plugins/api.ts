import { Plugin } from '@nuxt/types';

type Url = string;
interface SlugToUrl {
  (slug: string): Url;
}

interface UsernameToUrl {
  (username: string): Url;
}

interface ArticleQueryObject {
  author?: string;
  tag?: string;
  favorited?: string;
  limit?: number;
  offset?: number;
}
interface ApiUrl {
  getArticle: SlugToUrl;
  favoriteArticle: SlugToUrl;
  getComments: SlugToUrl;
  followUser: UsernameToUrl;
  getProfile: UsernameToUrl;
  queryArticles: (queryObject?: ArticleQueryObject) => Url;
  getFeed: Url;
  user: Url;
  articles: Url;
  comments: SlugToUrl;
  deleteComment: (articleSlug: string, commentId: number) => Url;
}

declare module 'vue/types/vue' {
  interface Vue {
    $apiUrl: ApiUrl;
  }
}
declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $apiUrl: ApiUrl;
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    $apiUrl: ApiUrl;
  }
}
declare module 'vuex/types/index' {
  interface Store<S> {
    $apiUrl: ApiUrl;
  }
}
const apiPlugin: Plugin = ({ $config: { apiURL } }, inject) => {
  const articlesUrl = `${apiURL}/api/articles`;
  const articleUrl = (slug: string) => `${articlesUrl}/${slug}`;
  const profileUrl = (username: string) => `${apiURL}/api/profiles/${username}`;
  const commentsUrl = (articleSlug: string) =>
    `${articleUrl(articleSlug)}/comments`;
  inject('apiUrl', {
    getArticle: (slug: string) => articleUrl(slug),
    favoriteArticle: (slug: string) => `${articleUrl(slug)}/favorite`,
    followUser: (username: string) => `${profileUrl(username)}/follow`,
    getProfile: (username: string) => profileUrl(username),
    getFeed: `${articlesUrl}/feed`,
    queryArticles: (queryObject?: ArticleQueryObject) => {
      return Object.entries(queryObject || {})
        .reduce((queryString, [key, value], index) => {
          return (queryString += `${key}=${value}${index === 0 ? '&' : ''}`);
        }, `${articlesUrl}?`)
        .slice(0, -1);
    },
    user: `${apiURL}/api/user`,
    articles: articlesUrl,
    comments: (articleSlug: string) => commentsUrl(articleSlug),
    deleteComment: (articleSlug: string, commentId: number) =>
      `${commentsUrl(articleSlug)}/${commentId}`,
  });
};

export default apiPlugin;
