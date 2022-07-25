<template>
    <div v-if="repo" class="flex justify-center items-center mt-12">
        <div class="block p-6 rounded-lg shadow-lg bg-white w-3/6">
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{{ repo.full_name }}</h5>
            <p class="text-gray-700 text-base mb-4">Owner: {{ repo.owner.login }}</p>
            <div v-if="contributors.length > 0">
                <h3 class="text-gray-900 text-md leading-tight font-medium mb-2">Contributors</h3>
                <ul>
                    <li v-for="(item, index) in contributors" :key="index">
                        <a :href="item.html_url">
                            <p class="text-gray-900 text-md leading-tight font-medium mb-2">{{ item.login }}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
const token = import.meta.env.VITE_APP_TOKEN;

export default {
    name: 'ContributorCard',
    props: ['repoId'],
    data() {
        return {
            repo: {},
            contributors: [{}],
            url: '',
        };
    },
    methods: {
        async init() {
            this.getRepo();
            // await this.getContributors();
        },
        async getRepo() {
            this.repo = await axios
                .get(`https://api.github.com/repositories/${this.repoId}`, {
                    headers: {
                        Authorization: `token ${token}`,
                    },
                })
                .then((res) => {
                    return res.data;
                })
                .catch((e) => {
                    return null;
                });

            this.repo;
        },

        async getContributors() {
            this.contributors = await axios
                .get(`${this.url}`, {
                    headers: {
                        Authorization: `token ${token}`,
                    },
                })
                .then((res) => {
                    const { data } = res;
                    console.log(data);
                    return data;
                })
                .catch((e) => {
                    return null;
                });
        },
    },
    beforeMount() {
        this.init();
    },
    mounted() {
        this.url = this.repo.contributors_url;
        this.getContributors();
    },
};
</script>

<style scoped></style>
