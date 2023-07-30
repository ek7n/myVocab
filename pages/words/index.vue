<template>
  <div class="p-4 px-6 bg-orange-50 main">
    <nuxtLink class="text-orange-500 text-2xl" to="/home"> Home </nuxtLink>
    <h1 class="my-4 text-5xl">Words!</h1>
    <div class="flex justify-between align-start flex-wrap gap-4 max-w-">
      <div class="bg-orange-100" v-for="w in words" v-bind:key="w.id">
        <div class="max-w-xs">
          <img src="https://cdn.pixabay.com/photo/2014/07/02/13/39/media-room-382157_1280.jpg" alt="" srcset="">
        <nuxtLink class="text-3xl  p-2 " :to="`words/${w.word}`">{{w.word}}</nuxtLink>
        <p class="has-textweight-black p-2 truncate is-size-2">{{w.definition}}</p>
        </div><!-- <p>{{w.word}}</p> -->
        
        
    </div>
    </div>
    
  </div>
</template>

<script setup>
const words = [
  {
    "word": "Majestic",
    "definition": "Having grandeur, dignity, or beauty"
  },
  {
    "word": "Futuristic",
    "definition": "Characterized by advanced or innovative design"
  },
  {
    "word": "Ornate",
    "definition": "Elaborately or highly decorated"
  },
  {
    "word": "Eclectic",
    "definition": "Deriving ideas, style, or taste from a broad and diverse range of sources"
  },
  {
    "word": "Cosmopolitan",
    "definition": "Exhibiting the characteristics of a city open to different cultures and influences"
  }
]

</script>

<style >
.main{
  min-height: 100vh;
}
</style>