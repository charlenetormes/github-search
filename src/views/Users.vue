<template>
    <div>
        <Search/>
        <div>
            <ul>
                <li class="my-4" v-for="(item, index) in arr" :key="index">
                    <ListCard :title="item" @click="getUsers"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import Search from '../components/Search.vue'
import ListCard from '../components/ListCard.vue'
import { ref } from 'vue';

export default {
    name: "Users",
    components: {
        Search,
        ListCard
    },
    setup() {
        const arr = ref(['Hello', 'World']);
        const config = import.meta.env;


        return {
            arr,
            config
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