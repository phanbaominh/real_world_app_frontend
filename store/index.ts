import { getAccessorType } from 'typed-vuex';
import { mutationTree, getterTree } from 'nuxt-typed-vuex';
import { Article } from '~/constants/api';
// Import all your submodules
// import * as submodule from '~/store/submodule'

// Keep your existing vanilla Vuex code for state, getters, mutations, actions, plugins, etc.
// ...
export const state = () => ({
  selectedTag: null as string | null,
  currentArticle: null as Article | null,
});

export const mutations = mutationTree(state, {
  setSelectedTag(state, selectedTag) {
    state.selectedTag = selectedTag;
  },
  setArticle(state, article) {
    state.currentArticle = article;
  },
});

export const getters = getterTree(state, {
  // Type-checked
  currentArticleD: (state) => state.currentArticle as Article,
});
// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
  state,
  mutations,
  getters,
  // modules: {
  //   // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
  //   submodule,
  // },
});
