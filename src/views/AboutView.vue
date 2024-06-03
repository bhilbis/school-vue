<template>
  <div class="flex items-center justify-center h-screen">
    <section id="about" class="py-4 w-full max-w-3xl bg-gray-100 p-6 rounded-md shadow-lg mx-auto -mt-28">
      <h1 class="text-3xl font-bold text-center mb-4">About Me</h1>
      <div class="text-center mb-8">
        <p class="text-lg">Web Designer</p>
        <h1 class="text-2xl">Hi, I'm <span class="text-blue-600">Flexsy Bilbis</span> From Indonesia</h1>
        <p class="mt-4 text-gray-700">
          Saya adalah siswa kelas 11 jurusan Rekayasa Perangkat Lunak dengan keahlian dalam pengembangan web. <br>
          Berkomitmen untuk berkontribusi dalam teknologi informasi melalui pengetahuan dan keterampilan praktis yang saya miliki.
        </p>
      </div>
      <div class="flex justify-center border-b mb-8" role="tablist">
        <button
          class="tab-link py-2 px-4 text-gray-600 hover:text-gray-800 focus:outline-none"
          @click="activeTab = 'skills'"
          :class="{ 'border-b-2 border-blue-600': activeTab === 'skills' }"
          role="tab"
          :aria-selected="activeTab === 'skills'"
          :tabindex="activeTab === 'skills' ? '0' : '-1'"
          id="skills-tab"
          aria-controls="skills-panel"
          @keydown="handleKeyDown"
        >Skills</button>
        <button
          class="tab-link py-2 px-4 text-gray-600 hover:text-gray-800 focus:outline-none"
          @click="activeTab = 'experience'"
          :class="{ 'border-b-2 border-blue-600': activeTab === 'experience' }"
          role="tab"
          :aria-selected="activeTab === 'experience'"
          :tabindex="activeTab === 'experience' ? '0' : '-1'"
          id="experience-tab"
          aria-controls="experience-panel"
          @keydown="handleKeyDown"
        >Experience</button>
        <button
          class="tab-link py-2 px-4 text-gray-600 hover:text-gray-800 focus:outline-none"
          @click="activeTab = 'education'"
          :class="{ 'border-b-2 border-blue-600': activeTab === 'education' }"
          role="tab"
          :aria-selected="activeTab === 'education'"
          :tabindex="activeTab === 'education' ? '0' : '-1'"
          id="education-tab"
          aria-controls="education-panel"
          @keydown="handleKeyDown"
        >Education</button>
      </div>
      <div v-if="activeTab === 'skills'" id="skills-panel" role="tabpanel" aria-labelledby="skills-tab" class="tab-content p-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h2 class="text-lg font-semibold">Web Developer</h2>
            <p>Create a Website</p>
          </div>
          <div class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h2 class="text-lg font-semibold">Web Design</h2>
            <p>Designing Web Interface</p>
          </div>
          <div class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h2 class="text-lg font-semibold">Mobile Developer</h2>
            <p>Create a mobile app</p>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'experience'" id="experience-panel" role="tabpanel" aria-labelledby="experience-tab" class="tab-content p-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h2 class="text-lg font-semibold">2022 - now</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h2 class="text-lg font-semibold">2022 - current</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h2 class="text-lg font-semibold">2022 - current</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'education'" id="education-panel" role="tabpanel" aria-labelledby="education-tab" class="tab-content p-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h2 class="text-lg font-semibold">2022</h2>
            <p>Create Website</p>
          </div>
          <div class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h2 class="text-lg font-semibold">2022</h2>
            <p>Design Website</p>
          </div>
          <div class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h2 class="text-lg font-semibold">Coming</h2>
            <p>Mobile Design</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'skills',
    };
  },
  methods: {
    handleKeyDown(event) {
      const key = event.key;
      let newTab = null;
      if (key === 'ArrowRight') {
        newTab = this.activeTab === 'skills' ? 'experience' : this.activeTab === 'experience' ? 'education' : 'skills';
      } else if (key === 'ArrowLeft') {
        newTab = this.activeTab === 'education' ? 'experience' : this.activeTab === 'experience' ? 'skills' : 'education';
      }
      if (newTab) {
        this.activeTab = newTab;
        event.preventDefault();
      }
    }
  }
}
</script>

<style scoped>
.tab-link.active {
  border-color: #4299e1;
  border-bottom-width: 2px;
}
</style>
