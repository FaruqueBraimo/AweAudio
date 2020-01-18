import Vue from 'vue'
import {dbPalavras, } from '../boot/firebase'


const state = {

    palavras: {},
    loading: false,
    uploadProgress: -1,

}

const mutations = {

    addPalavra (state, payload) {
       Vue.set(state.palavras, payload.id, payload.object)
    },
    updatePalavra (state, payload) {
        Object.assign(state.palavras[payload.id], payload.updates)
    },
    deletePalavra (state, id) {
        Vue.delete(state.palavras, id)
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
        return state.palavras[id]
    }
}

const actions = {

    listenPalavraRealTimeChanges ({state, commit}, hasInternetConection) {

        dbPalavras.onSnapshot(  { includeMetadataChanges: true }, function(snapshot) {

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
                    var source = snapshot.metadata.fromCache ? "local cache" : "server";
          console.log( source);
                });
            });
    },

    addPalavra ({commit}, payload) {
        commit('loading', true)
        payload.createdAt = new Date();
        payload.updatedAt = new Date();
        dbPalavras.add(payload)
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
        dbPalavras.doc(payload.id).update(payload.updates)
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
        dbPalavras.doc(id).delete()
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