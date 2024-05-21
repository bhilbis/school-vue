<template>
  <main class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-3xl font-bold mb-4">{{ tulisan }}</h1>
    <h2 class="text-lg mb-2">Nama Programmer: {{ nama }}</h2>
    <input type="text" name="nama" id="nama" v-model="inputNama" placeholder="Masukkan Nama" class="p-2 border border-gray-300 rounded-md mb-4">
    <button @click="tampilkanNama" class="px-4 py-2 bg-blue-500 text-white rounded-md">Proses</button>

    <div class="mb-4">
      <label for="angka1" class="block mb-1">Angka 1</label>
      <input type="text" name="angka1" id="angka1" v-model="inputAngkaSatu" class="p-2 border border-gray-300 rounded-md">
    </div>

    <div class="mb-4">
      <label for="angka2" class="block mb-1">Angka 2</label>
      <input type="text" name="angka2" id="angka2" v-model="inputAngkaDua" class="p-2 border border-gray-300 rounded-md">
    </div>

    <div class="flex gap-2">
    <button @click="proses" class="px-4 py-2 bg-blue-500 text-white rounded-md">Hitung Penjumlahan</button>
    <button @click="proses1" class="px-4 py-2 bg-orange-300 text-white rounded-md">Hitung Pengurangan</button>
    <button @click="proses2" class="px-4 py-2 bg-blue-500 text-white rounded-md">Hitung Perkalian</button>
    <button @click="proses3" class="px-4 py-2 bg-orange-500 text-white rounded-md">Hitung Pembagian</button>
    </div>
    
    <div class="border-2 mt-4 p-2 rounded">
    <h3>Hasil Operator =  {{  hasil }}</h3>
    </div>


  </main>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue';

const tulisan = "Selamat datang pada halaman Home"

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
  document.title = 'Kalkulator'; // Sesuaikan dengan judul yang Anda inginkan
})


</script>
