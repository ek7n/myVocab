<template>
  <div class="p-4 mx-4">
    <nuxtLink class="text-orange-500" to="/home"> Home </nuxtLink>
    <h1 class="mb-6 text-5xl">Words!</h1>
    <div class="flex justify-between align-start flex-wrap gap-4 max-w-">
      <div class="" v-for="w in words" v-bind:key="w.id">
        <div class="max-w-xs">
          <img src="https://cdn.pixabay.com/photo/2014/07/02/13/39/media-room-382157_1280.jpg" alt="" srcset="">
        <nuxtLink class="text-3xl mt-6" :to="`words/${w.word}`">{{w.word}}</nuxtLink>
        <p class="has-textweight-black truncate is-size-2">{{w.definition}}</p>
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