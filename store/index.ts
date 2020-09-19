import { getAccessorType } from 'typed-vuex';
import { mutationTree } from 'nuxt-typed-vuex';
// Import all your submodules
// import * as submodule from '~/store/submodule'

// Keep your existing vanilla Vuex code for state, getters, mutations, actions, plugins, etc.
// ...
export const state = () => ({
  selectedTag: null as string | null,
});

export const mutations = mutationTree(state, {
  setSelectedTag(state, selectedTag) {
    state.selectedTag = selectedTag;
  },
});
// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
  state,
  mutations,
  // modules: {
  //   // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
  //   submodule,
  // },
});