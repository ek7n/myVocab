<template>
  <div class="main p-3 bg-orange-50 m-6 rounded-lg">
    <div>
      <h1 class="px-6 mb-6 text-5xl">BAND8</h1>
      <p class="px-6 mb-6">Discover a world of knowledge and fun with our captivating content. We have carefully curated a diverse range of articles, blogs, and quizzes to cater to your interests and curiosities.</p>
    </div>
    <div class="flex gap-3 justify-center align-center flex-wrap ">
      <div class=" flex justify-center rounded-md align-center bg-orange-200 p-6">
        <nuxtLink class="text-5xl " to="words"> Words</nuxtLink>
        
      </div>
      <p class="px-6 mb-6">Looking to challenge yourself? Engage in our interactive quizzes designed to test your knowledge on various subjects. Whether you're a trivia enthusiast or simply enjoy a good brain teaser, our quizzes are sure to keep you entertained and engaged.</p>
      <div class="flex rounded-md align-center bg-orange-200 p-6">
        <div class="sticky bg-orange-500 rounded-2xl flex justify-center align-center px-1">Soon</div>
<nuxtLink class="text-5xl " to=""> Quizzes</nuxtLink>
      </div>
      <p class="px-6 mb-6">Explore our extensive collection of articles covering a wide array of topics, from the latest trends in technology to health and wellness tips. Immerse yourself in thought-provoking blogs penned by passionate writers, sharing insights, experiences, and perspectives that will leave you inspired.</p>
    <div class="flex rounded-md justify-center align-center bg-orange-200 p-6">
      <div class="sticky bg-orange-500 rounded-2xl flex justify-center align-center px-1">Soon</div>
<nuxtLink class="text-5xl rounded-md text-left" to=""> Blogs</nuxtLink>
    </div>
    
    </div>
    
    
    
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
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