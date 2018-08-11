import user_api from '../../api/user_api'

const state = {
  user: Object
}

const getters = {
  get_user(state) {
    return state.user
  }
}

const actions = {

}

const mutations = {

}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}