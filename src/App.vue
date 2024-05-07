<script setup>
    import NavBar from './components/NavBar.vue';
</script>

<template>
    <div>
        <header>
            <div class="wrapper">
                <NavBar />
            </div>
        </header>
        <main class="container mx-auto">
            <RouterView />
        </main>
    </div>
</template>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}
.wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
</style>
