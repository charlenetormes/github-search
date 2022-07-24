<template>
    <div>
        <Search/>
        <div v-if="store.state.isLoading">
            <Spinner/>
        </div>
        <div v-else-if="store.state.results.length > 0">
            <ul>
                <li class="my-4" v-for="(item, index) in store.state.results" :key="index">
                    <ListCard :user="item" @click="getUsers"/>
                </li>
            </ul>
        </div>
        <div v-else>
            <h1>No results found</h1>
        </div>
    </div>
</template>

<script lang="ts">
import Search from '../components/Search.vue'
import ListCard from '../components/ListCard.vue'
import Spinner from '../components/Spinner.vue'
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: "Users",
    components: {
        Search,
        ListCard,
        Spinner
    },
    setup() {
        const arr = ref(['Hello', 'World']);
        const config = import.meta.env;
        const store = useStore();


        return {
            arr,
            config,
            store
        }
    },
    methods: {
        async getUsers(){
            console.log(this.config);
        }
    }
}
</script>


<style scoped>

</style>