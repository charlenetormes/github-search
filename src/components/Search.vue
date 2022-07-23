<template>
    <div class="flex justify-center my-12">
        <div class="mb-3 w-3/6">
            <div class="input-group relative flex items-stretch w-full mb-4">
                <Dropdown/>
                <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3">
                <button class="btn inline-block px-6 py-2 border-2 border-gray-800 bg-gray-800 text-white    font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
            </div>
        </div>
    </div>
</template>

<script>
import Dropdown from '../components/Dropdown.vue'

export default {
    components: {
        Dropdown
    },
    setup() {
        
    },
}
</script>

<style scoped>

</style>