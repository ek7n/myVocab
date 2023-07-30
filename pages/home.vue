<template>
  <div class="main p-3 bg-orange-50 ">
    <div>
      <h1 class="px-6 mb-6 text-5xl">BAND8</h1>
      <p class="px-6 mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis a nulla obcaecati maiores? Fugiat labore neque illo non ducimus provident dolorum nesciunt! Ut ex fuga quis commodi. Labore, fuga enim!</p>
    </div>
    <div class="flex gap-3 justify-center align-center flex-wrap ">
      <div class=" flex justify-center rounded-md align-center bg-orange-200 p-6">
        <nuxtLink class="text-5xl " to="words"> Words</nuxtLink>
        
      </div>
      <div class="flex rounded-md justify-center align-center bg-orange-200 p-6">
<nuxtLink class="text-5xl " to="quizzes"> Quizzes</nuxtLink>
      </div>
    <div class="flex rounded-md justify-center align-center bg-orange-200 p-6">
<nuxtLink class="text-5xl rounded-md" to="blogs"> Blogs</nuxtLink>
    </div>
    
    </div>
    
    
    
  </div>
</template>

<style scoped>
.main{
  min-height: 100vh;
}
</style>