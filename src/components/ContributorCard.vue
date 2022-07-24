<template>
    <div class="flex justify-center items-center mt-12">
        Hello
        <!-- <div class="block p-6 rounded-lg shadow-lg bg-white w-3/6">
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{{repo.full_name}}</h5>
            <p class="text-gray-700 text-base mb-4">
                Owner: {{repo.owner.login}}
            </p>
            <h3 class="text-gray-900 text-md leading-tight font-medium mb-2">Contributors</h3>
            <ul>
                <li></li>
            </ul>
        </div> -->
    </div>    
</template>

<script>
import axios from 'axios'
const token = import.meta.env.VITE_APP_TOKEN;

export default {
    name: "ContributorCard",
    props:["repoId"],
    data() {
        return {
            repo: {},
            contributors: [{}]
        }
    },
    methods: {
        async getRepo(){
            this.repo = await axios.get(`https://api.github.com/repositories/${this.repoId}`,{
                headers: {
                    'Authorization': `token ${token}`
                }
            })
            .then((res) => {
                return res.data;
            })
            .catch((e) => {
                return null;
            });
        }
    },
    onBeforeMount(){
        this.getRepo();
    }
}
</script>

<style scoped>

</style>