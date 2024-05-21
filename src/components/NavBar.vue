<script setup>
    import { RouterLink } from 'vue-router'
    import { ref } from 'vue'

    const isMenuOpen = ref(false)

    const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    }
</script>

<template>
    <nav class="flex items-center justify-between bg-gray-800 p-4 rounded-b-md text-white w-full">
        <div class="flex items-center flex-shrink-0 text-white">
            <span class="font-semibold text-xl tracking-tight">Vue MPP</span>
        </div>
        <div class="block lg:hidden">
            
        </div>
        <div class="flex">
            <button @click="toggleMenu" class="lg:hidden flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
                <svg class="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
            <nav :class="{'block': isMenuOpen, 'hidden lg:block': !isMenuOpen}">
                <RouterLink to="/" class="text-gray-300 hover:text-white mr-4">Home</RouterLink>
                <RouterLink to="/about" class="text-gray-300 hover:text-white mr-4">About</RouterLink>
                <RouterLink to="/kalkulator" class="text-gray-300 hover:text-white">Kalkulator</RouterLink>
            </nav>
        </div>
    </nav>
</template>
