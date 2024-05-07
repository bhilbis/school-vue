<!-- <script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3 class="ml-20">
      You’ve successfully created a project
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style> -->
<template>
  <div class="flex flex-col container mx-auto px-4 py-5 items-center justify-center min-h-screen">
    <h1 class="text-3xl font-bold mb-4">Selamat datang pada Halaman Home</h1>
    <p class="text-lg mb-4">Ini adalah halaman utama dari aplikasi kami. Silakan jelajahi konten yang tersedia.</p>

    <div class="flex items-center justify-center mt-8">
      <router-link to="/about" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Tentang Kami</router-link>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
</style>
