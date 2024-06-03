<template>
  <main class="flex flex-col items-center justify-center min-h-screen">
    <div class="bg-gray-100 p-6 flex flex-col items-center justify-center -mt-28 rouned-lg">
    <h1 class="text-3xl font-bold mb-4">{{ tulisan }}</h1>
    <h2 class="text-lg mb-2">Input Nama: {{ nama }}</h2>
    
    <div class="flex gap-2 mb-4">
      <input type="text" v-model="inputNama" placeholder="Masukkan Nama" class="p-2 border border-gray-300 rounded-md">
      <button @click="tampilkanNama" class="px-4 h-10 bg-blue-500 text-white rounded-md">Proses</button>
    </div>

    <div class="mb-4 w-full max-w-xs">
      <label for="angka1" class="block mb-1">Angka 1</label>
      <input type="text" id="angka1" v-model="inputAngkaSatu" class="p-2 border border-gray-300 rounded-md w-full">
    </div>

    <div class="mb-4 w-full max-w-xs">
      <label for="angka2" class="block mb-1">Angka 2</label>
      <input type="text" id="angka2" v-model="inputAngkaDua" class="p-2 border border-gray-300 rounded-md w-full">
    </div>

    <div class="flex gap-2 mb-4">
      <button @click="proses" class="px-4 py-2 bg-blue-500 text-white rounded-md">+</button>
      <button @click="proses1" class="px-4 py-2 bg-orange-500 text-white rounded-md">-</button>
      <button @click="proses2" class="px-4 py-2 bg-blue-500 text-white rounded-md">*</button>
      <button @click="proses3" class="px-4 py-2 bg-orange-500 text-white rounded-md">/</button>
    </div>
    
    <div class="border-2 p-4 rounded-md bg-white">
      <h3>Hasil Operator = {{ hasil }}</h3>
    </div>
  </div>

  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const tulisan = "Selamat datang pada halaman Kalkulator"

const nama = ref('Flexsy Bilbis Triwibowo')
const inputNama = ref('')
const tampilkanNama = () => {
  nama.value = inputNama.value
}

const inputAngkaSatu = ref('')
const inputAngkaDua = ref('')
const hasil = ref('')

const proses = () => {
  hasil.value = parseInt(inputAngkaSatu.value) + parseInt(inputAngkaDua.value)
}

const proses1 = () => {
  hasil.value = parseInt(inputAngkaSatu.value) - parseInt(inputAngkaDua.value)
}

const proses2 = () => {
  hasil.value = parseInt(inputAngkaSatu.value) * parseInt(inputAngkaDua.value)
}

const proses3 = () => {
  hasil.value = parseInt(inputAngkaSatu.value) / parseInt(inputAngkaDua.value)
}

onMounted(() => {
  document.title = 'Kalkulator';
})
</script>

<style scoped>
</style>
