<template>
    <div class="flex justify-center items-center">
        <div class="block p-6 rounded-lg shadow-lg bg-white w-3/6">
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{{repo.full_name}}</h5>
            <p class="text-gray-700 text-base mb-4">
                Owner: <a :href="repo.owner.html_url">{{repo.owner.login}}</a>
            </p>
            <p class="text-gray-700 text-base mb-4">
                <a :href="repo.html_url">{{repo.html_url}}</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "RepoCard",
    props: ['repo'],
    setup() {
        
    },
}
</script>

<style scoped>

</style>