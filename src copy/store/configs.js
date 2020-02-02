import Vue from 'vue'
import {dbconfiguracao, } from '../boot/firebase'
import { LocalStorage, SessionStorage } from 'quasar'
import { Dark } from 'quasar'

const state = {

    configuracoes: {},
    loading: false,
    uploadProgress: -1,
    dark: ''

}

const mutations = {

    
}

const getters = {
   darkStatus(){
    if( LocalStorage.has('key') ) {
        let value = LocalStorage.getItem('key')
        if(value === true){
            Dark.set(true)
        }
      }

   }
            ,
    darkLabel(){
        

    }


}

const actions = {

   addDark({commit}) {
        commit('loading', true)                  
        Dark.set(true)
          LocalStorage.set('key', true)
          console.log( "Todos" , LocalStorage.getItem('key'))

     
    },
    
    updateDark({commit}, payload) {
        commit('loading', true)
        Dark.set(false)
        LocalStorage.set('key', false)
       
    },

    

}


export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}