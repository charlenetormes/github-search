<template>
    <ContributorCard :repoId="route.query.id" />
</template>

<script>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import ContributorCard from '../components/ContributorCard.vue';
export default {
    name: 'Repository',
    components: {
        ContributorCard,
    },
    setup() {
        const route = useRoute();
        const store = useStore();

        store.dispatch('setSearch', '');

        return {
            route,
            store,
        };
    },
};
</script>

<style scoped></style>
