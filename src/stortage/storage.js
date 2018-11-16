import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import escuela from './modules/escuela'
import profesor from './modules/profesor'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    escuela,
    profesor
  },
  state: {
    nombre: 'Maikel Aparicio',
  },
  mutations: {},
  actions: {},
  getters: {}

})
