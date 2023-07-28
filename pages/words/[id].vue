<template>
  <div>

    <div v-for="w in wordz" v-bind:key="w.id">
        <h1>{{w.word}}</h1>
        <p>{{w.phonetic}}</p>
        <div v-for="m in w.meanings" v-bind:key="m.id">
          <p>{{m.partOfSpeech}}</p>
          <div v-for="d in m.definitions" v-bind:key="d.id">
            <p>{{d.definition}}</p>
          <p>{{d.example}}</p>
          <div v-for="s in d.synonyms" v-bind:key="s.id">
            <p>SYN</p>
            <p>{{s}}</p>
          </div>
          <div v-for="a in d.antonyms" v-bind:key="a.id">
            <p>ANT</p>
            <p>{{a}}</p>
          </div>
          
          </div>
          
        </div>
        
        <hr>
    </div>

  </div>
</template>

<script setup>
const { id } = await useRoute().params
const  {data:wordz}  = await useFetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${id}`)
/* const {data:products} = await useFetch('https://fakestoreapi.com/products')        */
  
</script>