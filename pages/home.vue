<template>
  <div class="main p-3 sm:p-0 bg-orange-50 m-6 rounded-lg">
    <div>
      <h1 class="px-6 mb-6 text-5xl">BAND8</h1>
      <p class="px-6 mb-6">Discover a world of knowledge and fun with our captivating content. We have carefully curated a diverse range of articles, blogs, and quizzes to cater to your interests and curiosities.</p>
    </div>
     <div class="flex gap-4 mx-4 justify-center align-center flex-wrap  ">
      <div class=" flex flex-col justify-center rounded-md align-center bg-orange-200 p-6">
        <nuxtLink class="text-5xl px-6 mb-6 " to="words"> Words</nuxtLink>
        <p class="px-6 mb-6">Discover a world of knowledge and fun with our captivating content. We have carefully curated a diverse range of articles, blogs, and quizzes to cater to your interests and curiosities.</p>
      </div>
      
      <div class="flex flex-col rounded-md align-center bg-orange-200 p-6">
<div class="flex  ">
  <nuxtLink class="text-5xl px-6 mb-6  " to=""> Quizzes</nuxtLink>


  </div>        
 <p class="px-6 mb-6">Looking to challenge yourself? Engage in our interactive quizzes designed to test your knowledge on various subjects. Whether you're a trivia enthusiast or simply enjoy a good brain teaser, our quizzes are sure to keep you entertained and engaged.</p>


      </div>
   
    <div class="flex flex-col rounded-md justify-center align-center bg-orange-200 p-6">
      
<nuxtLink class="text-5xl px-6 mb-6 rounded-md text-left " to=""> Blogs</nuxtLink>
   <p class="px-6 mb-6">Explore our extensive collection of articles covering a wide array of topics, from the latest trends in technology to health and wellness tips. Immerse yourself in thought-provoking blogs penned by passionate writers, sharing insights, experiences, and perspectives that will leave you inspired.</p>
    </div>
    
    </div> 
    
    
   <!--  <iframe src="https://gamma.app/embed/lk4xoxrnfltl98v" style="width: 1400px; max-width: 100%; height: 1450px" allow="fullscreen" title="Creative Portfolio for [name]"></iframe> -->
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