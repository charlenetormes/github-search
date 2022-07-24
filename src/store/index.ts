import { createStore } from 'vuex'
import axios from 'axios'

const token = import.meta.env.VITE_APP_TOKEN;
const header = {
    'Authorization': `token ${token}`
}

export default createStore({
    state: {
        search: '',
        type: 'Users',
        results: [],
        isLoading: false
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
        },
        setLoading(state, value){
            state.isLoading = value;
        }
    },
    actions: {
        setSearch({commit}, payload){
            commit('setSearch', payload);
        },
        setType({commit}, payload){
            commit('setType', payload);
        },
        setLoading({commit}, payload){
            commit('setLoading', payload);
        },
        async setResults({commit, state}, payload){
            let url = `https://api.github.com/`;

            if(state.type === 'Users'){
                url += `users/${payload.user}`;
                try{
                    const {data} = await axios.get(url, {
                        headers: header
                    });
    
                    commit('setResults', [data]);
                }
                catch(e){
                    commit('setResults', []);
                }
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