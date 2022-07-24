<template>
    <div>
        <Search/>
        <div v-if="store.state.isLoading">
            <Spinner/>
        </div>
        <div v-else-if="store.state.results.length > 0">
            <ul>
                <li class="my-4" v-for="(item, index) in store.state.results" :key="index">
                    <UserCard v-if="store.state.type === 'Users'" :user="item"/>
                    <RepoCard v-else :repo="item"/>
                </li>
            </ul>
            <Pagination/>
        </div>
        <div v-else>
            <h1>No results found</h1>
        </div>
    </div>
</template>

<script lang="ts">
import Search from '../components/Search.vue'
import UserCard from '../components/UserCard.vue'
import Spinner from '../components/Spinner.vue'
import RepoCard from '../components/RepoCard.vue'
import Pagination from '../components/Pagination.vue'
import { useStore } from 'vuex';

export default {
    name: "Users",
    components: {
        Search,
        UserCard,
        Spinner,
        RepoCard,
        Pagination
    },
    setup() {
        const config = import.meta.env;
        const store = useStore();

        store.dispatch('setResults', {user:''});

        return {
            config,
            store
        }
    }
}
</script>


<style scoped>

</style>