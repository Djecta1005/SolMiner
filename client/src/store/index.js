import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
 state: {
    user: {
        id: 0 ,
        fname: 'admin',
        lname: 'admin',
        jobtype: 'admin',
        datedebutdispo: '0',
        datefindispo:'0'
      },
     fournitures:[],
      dated: new Date(),
      datef:new Date()
 },
 getters: {},
 mutations: {
  getSelectedVolontaire (state, payload) {
    state.user.id= payload[0], 
    /*state.user.jobtype= payload[2],
    state.user.datedebutdispo = payload[3],
    state.user.datefindispo = payload[4]*/
    state.user.fname = payload[1],
    state.user.lname = payload[2],
    state.user.jobtype= payload[3],
    state.user.datedebutdispo = payload[4],
    state.user.datefindispo = payload[5]
  },
  addFourniture: (state,payload) =>{
    state.fournitures.push(payload)
  },
  setdated ( state, payload){
    state.dated=  payload ;  },

    setdatef ( state, payload){
      state.datef=  payload
    }
 },


 actions: {}
});