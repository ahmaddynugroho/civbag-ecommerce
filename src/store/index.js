import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods: [
      { title: 'Dakimakura Melantha', price: '20'},
      { title: 'Dakimakura Mostima', price: '30'},
      { title: 'Dakimakura Exusiai', price: '10'},
      { title: 'Dakimakura Amiya', price: '15'},
    ],
    chart: [],
    chartTotal: 0
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
