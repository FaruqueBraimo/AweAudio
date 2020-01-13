import Vue from 'vue'
import {dbconfiguracao, } from '../boot/firebase'


const state = {

    configuracoes: {},
    loading: false,
    uploadProgress: -1,

}

const mutations = {

    addConfiguracao (state, payload) {
       Vue.set(state.configuracoes, payload.id, payload.object)
    },
    updatePalavra (state, payload) {
        Object.assign(state.configuracoes[payload.id], payload.updates)
    },
    deleteConfiguracao (state, id) {
        Vue.delete(state.configuracoes, id)
    },
    loading (state, val) {
        state.loading = val
    },
    uploadProgress (state, val) {
        state.uploadProgress = val
    }
}

const getters = {
    getPalavraById: (state) => (id) => {
        return state.configuracoes [id]
    }
}

const actions = {

    listenPalavraRealTimeChanges ({state, commit}, hasInternetConection) {

        dbconfiguracao.onSnapshot(function(snapshot) {

                snapshot.docChanges().forEach(function(change) {

                    if (change.type === "added") {
                        commit('addPalavra', {
                            id: change.doc.id,
                            object: change.doc.data()
                        })
                    }
                    if (change.type === "modified") {
                        commit('updatePalavra', {
                            id: change.doc.id,
                            updates: change.doc.data()
                        })
                    }
                    if (change.type === "removed") {

                        commit('deletePalavra', change.doc.id)

                    }
                });
            });
    },

    addPalavra ({commit}, payload) {
        commit('loading', true)
        payload.createdAt = new Date();
        payload.updatedAt = new Date();
        dbconfiguracao.add(payload)
            .then(function(docRef) {
                commit('loading', false)
                // showSuccessMessage('Cargo agendada com sucesso!')
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
                commit('loading', false)
                // showErrorMessage(error.message)
            });
    },
    updatePalavra({commit}, payload) {
        commit('loading', true)
        payload.updatedAt = new Date();
        dbconfiguracao.doc(payload.id).update(payload.updates)
            .then(function(docRef) {
                commit('loading', false)
             console.log('Cargo actualizada com sucesso!')
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
                commit('loading', false)
                showErrorMessage(error.message)
            });
    },

    deletePalavra ({commit}, id) {
        commit('loading', true)
        dbconfiguracao.doc(id).delete()
            .then(function(docRef) {
                commit('loading', false)
                // showSuccessMessage('Cargo deletada com sucesso!')
            })
            .catch(function(error) {
                console.error("Error removing document: ", error);
                commit('loading', false)
                // showErrorMessage(error.message)
            });



    },


}


export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}