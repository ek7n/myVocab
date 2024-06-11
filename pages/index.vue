<template>
  <div class="main-container">
    <!-- Navbar -->
    <nav class="navbar bg-orange-400 p-4 text-white fixed w-full top-0 z-50">
      <div class="flex justify-between items-center">
        <nuxt-link class="text-3xl" to="/">BAND8</nuxt-link>
        <div class="flex gap-4">
          <nuxt-link to="/words">Words</nuxt-link>
          <nuxt-link to="/blogs">Blogs</nuxt-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="main p-3 sm:p-6 bg-orange-50 m-6 rounded-lg pt-20">
      <div>
        <h1 class="text-5xl mb-6 px-6">BAND8</h1>
        <p class="mb-6 px-6">Discover a world of knowledge and fun with our captivating content. We have carefully curated a diverse range of articles, blogs, and quizzes to cater to your interests and curiosities.</p>
      </div>

      <div class="flex gap-4 mx-2 justify-center items-center flex-wrap">
        <div class="main-boxes flex flex-col justify-center items-center bg-orange-200 p-6 rounded-md">
          <nuxt-link class="text-5xl mb-6" to="words">Words</nuxt-link>
          
          <p class="text-justify">Enhance your vocabulary with our curated list of words, complete with definitions and usage examples.</p>
        </div>
        
        <div class="flex flex-col items-center bg-orange-200 p-6 rounded-md">
          <nuxt-link class="text-5xl mb-6" to="blogs">Blogs</nuxt-link>
          <p class="text-justify">Explore a variety of topics in our engaging blogs, featuring insights and tips from passionate writers.</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer bg-orange-400 p-4 text-white mt-6 text-center">
      <p>&copy; 2024 BAND8. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
}

.main {
  flex: 1;
  padding-top: 5rem; /* Navbar'ın yüksekliği kadar boşluk bırakın */
}

.footer {
  
}
</style>
