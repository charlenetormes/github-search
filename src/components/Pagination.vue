<template>
    <div class="flex justify-center my-8">
    <nav aria-label="Page navigation example">
        <ul class="flex list-style-none">
        <li class="page-item" v-if="store.state.page > 1"><a
            class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 focus:shadow-none"
            href="#"
            @click="prevPage">Previous</a></li>
        <li class="page-item"><a
            class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
            href="#"
            @click="nextPage">Next</a></li>
        </ul>
    </nav>
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    name: "Pagination",
    setup() {
        const store = useStore();

        return {
            store
        }
    },
    methods: {
        async nextPage(){
            const page = this.store.state.page;
            const search = this.store.state.search;
            await this.store.dispatch('setPage', page+1);
            this.store.commit('setResult', []);
            await this.store.dispatch('setResults',{user:search ?? '', repo: search ?? ''});
        },
        async prevPage(){
            const page = this.store.state.page;
            const search = this.store.state.search;
            await this.store.dispatch('setPage', page-1);
            this.store.commit('setResult', []);
            await this.store.dispatch('setResults',{user:search ?? '', repo: search ?? ''});
        }
    }
}
</script>

<style scoped>

</style>