<template>
    <div>
      <header class="py-2 ">
        
      </header>
  
      <!-- About -->
      <section id="about" class="py-4 mt-40 bg-gray-100">
        <div class="container mx-auto px-4">
          <h1 class="text-3xl font-bold text-center mb-4">About Me</h1>
          <div class="container mx-auto px-4 flex justify-center">
          <div class="header-text text-center">
            <p>Web Designer</p>
            <h1>Hi, I,m <span>Flexsy</span> Bilbis From Indonesia</h1>
          </div>
        </div>
          <div class="flex justify-center border-b" role="tablist">
            <button
              class="tab-link py-2 px-4 text-gray-600 hover:text-gray-800 focus:outline-none"
              @click="activeTab = 'skills'"
              :class="{ 'active': activeTab === 'skills' }"
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
              :class="{ 'active': activeTab === 'experience' }"
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
              :class="{ 'active': activeTab === 'education' }"
              role="tab"
              :aria-selected="activeTab === 'education'"
              :tabindex="activeTab === 'education' ? '0' : '-1'"
              id="education-tab"
              aria-controls="education-panel"
              @keydown="handleKeyDown"
            >Education</button>
          </div>
          <div v-if="activeTab === 'skills'" id="skills-panel" role="tabpanel" aria-labelledby="skills-tab" class="tab-content p-4">
            <p class="mt-4">
              Saya adalah siswa kelas 11 dari jurusan Rekayasa Perangkat Lunak yang memiliki komitmen dalam pengembangan teknologi website. Memiliki kemampuan dalam bidang Web Developer. Saya siap memberikan kontribusi dalam dunia teknologi informasi dengan pengetahuan dan keterampilan praktis yang dimiliki.
            </p>
  
            <!-- Tab Contents -->
            <div class="grid grid-cols-3 gap-4 mt-8">
              <div class="grid-item h-40">
                <h2 class="text-lg font-semibold">Web Developer</h2>
                <p>Create a Website</p>
              </div>
              <div class="grid-item h-40">
                <h2 class="text-lg font-semibold">Web Design</h2>
                <p>Designing Web Interface</p>
              </div>
              <div class="grid-item h-40">
                <h2 class="text-lg font-semibold">Mobile Developer</h2>
                <p>Create a mobile app</p>
              </div>
            </div>
          </div>
          <div v-if="activeTab === 'experience'" id="experience-panel" role="tabpanel" aria-labelledby="experience-tab" class="tab-content p-4">
            <div class="grid grid-cols-3 gap-4">
              <div class="grid-item w-64 h-40">
                <h2 class="text-lg font-semibold">2022 - now</h2>
                <p>SMK N 1 Purwosari</p>
              </div>
              <div class="grid-item w-64 h-40">
                <h2 class="text-lg font-semibold">2022 - current</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div class="grid-item w-64 h-40">
                <h2 class="text-lg font-semibold">2022 - current</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div v-if="activeTab === 'education'" id="education-panel" role="tabpanel" aria-labelledby="education-tab" class="tab-content p-4">
            <div class="grid grid-cols-3 gap-4">
              <div class="grid-item w-64 h-40">
                <h2 class="text-lg font-semibold">2022</h2>
                <p>Create Website Training</p>
              </div>
              <div class="grid-item w-64 h-40">
                <h2 class="text-lg font-semibold">2022</h2>
                <p>Design Website Training</p>
              </div>
              <div class="grid-item w-64 h-40">
                <h2 class="text-lg font-semibold">Coming</h2>
                <p>hmm Still Coming broo</p>
              </div>
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

