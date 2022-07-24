<template>
    <ContributorCard :repoId="route.query.id"/>
</template>

<script>
import {useRoute} from 'vue-router'
import ContributorCard from '../components/ContributorCard.vue'
export default {
    name: "Repository",
    components: {
        ContributorCard
    },
    setup() {
        const route = useRoute()
        console.log(route.query.id);
        return{
            route
        }
    },
}
</script>

<style scoped>

</style>