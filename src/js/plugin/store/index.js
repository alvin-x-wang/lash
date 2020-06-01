import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeMenu: 'home'
  },
  mutations: {
    setActiveMenu(state, menu) {
      state.activeMenu = menu
    }
  },
  actions: {
  },
  modules: {
  }
})
