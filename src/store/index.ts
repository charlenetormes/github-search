import { createStore } from 'vuex'
import axios from 'axios'

const token = import.meta.env.VITE_APP_TOKEN;

export default createStore({
    state: {
        search: '',
        type: 'Users',
        results: []
    },
    mutations: {
        setSearch(state, value){
            state.search = value;
        },
        setType(state, value){
            state.type = value;
        },
        setResults(state, value){
            state.results = value;
        }
    },
    actions: {
        setSearch({commit}, payload){
            commit('setSearch', payload);
        },
        setType({commit}, payload){
            commit('setType', payload);
        },
        setResults({commit, state}, payload){
            if(state.type === 'Users'){
                axios.get('')
            }
            else if (state.type === 'Repositories'){
            
            }
            else if (state.type === 'Topics'){
                
            }
        }
    },
    getters: {

    },
    modules: {

    }
});