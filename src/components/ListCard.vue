<template>
    <div class="flex justify-center">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-lg">
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{{title}}</h5>
            <p class="text-gray-700 text-base mb-4">
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ListCard",
    props: ['title'],
    setup() {
        
    },
}
</script>

<style scoped>

</style>