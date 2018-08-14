import user_api from '../../api/user_api'
import gql from 'graphql-tag'

const state = {
  user: '11',
  is_login: false
}

const getters = {
  get_user(state) {
    return state.user
  }
}

const actions = {
  async regist_user({ commit }, user_payload) {

    let a = await user_api.regist_api(user_payload)
    
    console.log('a ', a);
  },
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