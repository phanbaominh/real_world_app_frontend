import { getAccessorType } from 'typed-vuex';
import { mutationTree, getterTree, actionTree } from 'nuxt-typed-vuex';
import { Article } from '~/constants/api';
// Import all your submodules
// import * as submodule from '~/store/submodule'

// Keep your existing vanilla Vuex code for state, getters, mutations, actions, plugins, etc.
// ...
export const state = () => ({
  selectedTag: null as string | null,
  currentArticle: null as Article | null,
  currentArticleApiUrl: null as string | null,
});

export const mutations = mutationTree(state, {
  SET_SELECTED_TAG(state, selectedTag) {
    state.selectedTag = selectedTag;
  },
  SET_ARTICLE(state, article) {
    state.currentArticle = article;
  },
  SET_ARTICLE_URL(state, url) {
    state.currentArticleApiUrl = url;
  },
});

export const getters = getterTree(state, {
  // Type-checked
  currentArticleD: (state) => state.currentArticle as Article,
});

export const actions = actionTree(
  { state, mutations, getters },
  {
    async setArticle({ commit, state }, slug) {
      const url = this.$apiUrl.getArticle(slug);
      const article = (
        await this.$axios.$get(state.currentArticleApiUrl || url)
      ).article;
      commit('SET_ARTICLE', article);
      if (slug) commit('SET_ARTICLE_URL', url);
    },
    async refreshArticle({ dispatch }) {
      await dispatch('setArticle');
    },
    async favoriteArticle({ dispatch }, slug) {
      const url = this.$apiUrl.favoriteArticle(slug);
      await this.$axios.$post(url);
      await dispatch('refreshArticle');
    },
    async unfavoriteArticle({ dispatch }, slug) {
      const url = this.$apiUrl.favoriteArticle(slug);
      await this.$axios.$delete(url);
      await dispatch('refreshArticle');
    },
  }
);
// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
  state,
  mutations,
  getters,
  actions,
  // modules: {
  //   // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
  //   submodule,
  // },
});
