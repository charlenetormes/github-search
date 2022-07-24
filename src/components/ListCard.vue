<template>
    <div class="flex justify-center items-center">
        <div class="block p-6 rounded-lg shadow-lg bg-white w-3/12">
            <img :src="user.avatar_url" width="150" height="150" class="mx-auto my-5 rounded-full">
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{{user.login}}</h5>
            <p class="text-gray-700 text-base mb-4">
                {{user.location}}
            </p>
             <p class="text-gray-700 text-base mb-4">
                <a :href="user.url">{{user.html_url}}</a>
            </p>
            <p class="text-gray-700 text-base mb-4">
                {{user.bio}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ListCard",
    props: ['user'],
    setup() {
        
    },
}
</script>

<style scoped>

</style>