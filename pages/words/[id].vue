<template>
  <div class="p-2 bg-white-200 main">

    <div v-for="w in wordz" v-bind:key="w.id">
      
        <div class="flex justify-between gap-2 my-4">
         <div>
           <h1 class="text-4xl">{{w.word}}</h1>
        <p class="mt-1">{{w.phonetic}}</p>
         </div>
        <div class="mt-1 pb-0 bg-blue-50 text-2xl p-2 rounded-md">
          <p class="mb-">Example</p>
        </div>
        </div>
        <div class="bg-orange-200 p-2 rounded-md mb-1" v-for="m in w.meanings" v-bind:key="m.id">
          <div class="flex gap-2">
            <div class="bg-orange-300 rounded-md p-1">{{w.meanings.indexOf(m)+1}}</div>
          <p class="bg-orange-300 rounded-md p-1">{{m.partOfSpeech}}</p>
          </div>
        
          <div v-for="d in m.definitions" v-bind:key="d.id">
            <p>{{d.definition}}</p>
          <p>{{d.example}}</p>
          
          <div class="flex gap-2" v-for="s in d.synonyms" v-bind:key="s.id">
            <p>syn</p>
            <p>{{s}}</p>
          </div>
          <div class="flex gap-2" v-for="a in d.antonyms" v-bind:key="a.id">
            <p>ant</p>
            <p>{{a}}</p>
          </div>
          
          </div>
          
        </div>
        
        
    </div>

  </div>
</template>

<script setup>
const { id } = await useRoute().params
const  {data:wordz}  = await useFetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${id}`)
/* const {data:products} = await useFetch('https://fakestoreapi.com/products')        */
  
</script>