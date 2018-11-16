import axios from 'axios'
import {store} from '../storage'

const url = 'http://127.0.0.1:8000/escuela'

const state = {
  endpoints: {
    escuela: url + '/school/',
  },
  escuelas: []
}

const mutations = {
  /**Escuelas**/
  async listarEscuelas (state) {
    await axios.get(state.endpoints.escuela).then((response) => {
      state.escuelas = response.data
    }).catch(error => {
      state.escuelas = []
    })
  },
}

const actions = {
  /**Escuelas**/
  getEscuelas ({commit}) {
    commit('listarEscuelas')
  },
}

const getters = {
  escuelas: (state) => {
    return state.escuelas
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
