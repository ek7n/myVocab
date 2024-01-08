<template>
  <div class="main p-3 sm:p-6 bg-orange-50 m-6 rounded-lg">
  <div>
    <h1 class="text-5xl mb-6 px-6">BAND8</h1>
    <p class="mb-6 px-6">Discover a world of knowledge and fun with our captivating content. We have carefully curated a diverse range of articles, blogs, and quizzes to cater to your interests and curiosities.</p>
  </div>

  <div class="flex gap-4 mx-2 justify-center items-center flex-wrap">
    <div class="flex flex-col justify-center items-cente bg-orange-200 p-6 rounded-md">
      <nuxt-link class="text-5xl mb-6" to="words">Words</nuxt-link>
      <p class="text-justify">Discover a world of knowledge and fun with our captivating content. We have carefully curated a diverse range of articles, blogs, and quizzes to cater to your interests and curiosities.</p>
    </div>
    
    <div class="flex flex-col items-cente bg-orange-200 p-6 rounded-md">
      <!-- <nuxt-link class="text-5xl mb-6" to="">Quizzes</nuxt-link> -->
      <h2 class="text-5xl mb-6" to="">Quizzes</h2>
      <!-- <p class=" bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-white">soon</p> -->
      <p class="text-justify">Looking to challenge yourself? Engage in our interactive quizzes designed to test your knowledge on various subjects. Whether you're a trivia enthusiast or simply enjoy a good brain teaser, our quizzes are sure to keep you entertained and engaged.</p>
    </div>

    <div class="flex flex-col items-cente bg-orange-200 p-6 rounded-md">
      <!-- <nuxt-link class="text-5xl mb-6" to="">Blogs</nuxt-link> -->
      <h2 class="text-5xl mb-6">Blogs</h2>
      <p class="text-justify">Explore our extensive collection of articles covering a wide array of topics, from the latest trends in technology to health and wellness tips. Immerse yourself in thought-provoking blogs penned by passionate writers, sharing insights, experiences, and perspectives that will leave you inspired.</p>
    </div>
  </div>
  
  <!-- Uncomment and update the iframe as needed -->
  <!-- <iframe src="https://gamma.app/embed/lk4xoxrnfltl98v" style="width: 100%; height: 1450px" allowfullscreen title="Creative Portfolio for [name]"></iframe> -->
</div>

  </template>

<script setup lang="ts">

</script>

<style>
.main{
  min-height: 100vh;
}

.sticky{
  position: relative;
  top: -33%;
  left:85%;
  height: 55%;
  width: 65%;


}
</style>