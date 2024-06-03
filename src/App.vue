<template>
    <div class="flex flex-col min-h-screen overflow-hidden">
      <header class="fixed top-0 left-0 right-0 w-full z-10">
        <NavBar />
      </header>
      <main class="flex-grow flex items-center justify-center w-full mt-16">
        <RouterView />
      </main>
      <footer class="w-full">
        <FooTer />
      </footer>
    </div>
  </template>
  
  <script setup>
  import NavBar from './components/NavBar.vue';
  import FooTer from './components/FooTer.vue';
  </script>
  
  <style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden; /* Prevent scrolling */
  }
  </style>
  