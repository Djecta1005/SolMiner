import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
    user: {
        id: 0 ,
        username: 'admin',
        jobtype: 'admin',
        datedebutdispo: '0',
        datefindispo:'0'
      }
 },
 getters: {},
 mutations: {
  getSelectedVolontaire (state, payload) {
    state.user.username = payload[1],
    state.user.id= payload[0], 
    state.user.jobtype= payload[2],
    state.user.datedebutdispo = payload[3],
    state.user.datefindispo = payload[4]
  }
 },
 actions: {}
});