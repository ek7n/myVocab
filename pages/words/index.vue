<template>
<div class="p-4 px-6 m-4 rounded-lg bg-orange-50 overflow-hidden">
  <nuxt-link class="text-orange-500 text-2xl" to="/">Home</nuxt-link>
  <h1 class="my-4 text-5xl">Words!</h1>

  <div class="flex justify-between items-start flex-wrap gap-4">
    <div class="bg-white rounded-md" v-for="w in words" v-bind:key="w.id">
      <div class="max-w-xs mb-2">
        <div class="flex justify-between items-center">
          <nuxt-link class="text-3xl p-3" :to="`words/${w.word}`">{{ w.word }}</nuxt-link>
          <div class="flex justify-between items-center">
            <div v-if="w.partOfSpeech == 'noun'" class="text-black bg-green-200 m-2 p-2 rounded-md">{{ w.partOfSpeech }}</div>
            <div v-if="w.partOfSpeech == 'verb'" class="text-black bg-orange-200 m-2 p-2 rounded-md">{{ w.partOfSpeech }}</div>
            <div v-if="w.partOfSpeech == 'adjective'" class="text-black bg-purple-200 m-2 p-2 rounded-md">{{ w.partOfSpeech }}</div>
            <div class="text-black bg-red-200 m-2 p-2 rounded-md">{{ w.cefrLevel }}</div>
          </div>
        </div>
        <p class="text-black p-3 truncat">{{ w.definition }}</p>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>

const weeks =[1,2,3,4]

const words = [
  {
    "word": "subvert",
    "partOfSpeech": "verb",
    "definition": "To undermine the power or authority of something, often in a covert or secretive manner.",
    "week": 1,
    "cefrLevel": "B2"
  },
  {
    "word": "comportment",
    "partOfSpeech": "noun",
    "definition": "Conduct or behavior, especially in terms of manners or deportment.",
    "week": 1,
    "cefrLevel": "C1"
  },
  
  {
    "word": "avert",
    "partOfSpeech": "verb",
    "definition": "To prevent or turn away from something undesirable or dangerous.",
    "week": 1,
    "cefrLevel": "B2"
  },
  {
    "word": "contentious",
    "partOfSpeech": "adjective",
    "definition": "Causing or likely to cause an argument or disagreement.",
    "week": 1,
    "cefrLevel": "B2"
  },
  {
    "word": "resurgence",
    "partOfSpeech": "noun",
    "definition": "A revival or renewal of activity or strength; a comeback.",
    "week": 1,
    "cefrLevel": "C1"
  },
  {
    "word": "dismantle",
    "partOfSpeech": "verb",
    "definition": "To take apart or disassemble something, especially a structure or system.",
    "week": 1,
    "cefrLevel": "B2"
  },
  {
    "word": "alluding",
    "partOfSpeech": "verb",
    "definition": "To suggest or indirectly mention something without explicitly stating it.",
    "week": 1,
    "cefrLevel": "B2"
  },
  {
    "word": "entail",
    "partOfSpeech": "verb",
    "definition": "To involve or require as a necessary part or consequence.",
    "week": 1,
    "cefrLevel": "B2"
  },
  {
    "word": "vehement",
    "partOfSpeech": "adjective",
    "definition": "Showing strong feeling or intense conviction; passionate.",
    "week": 1,
    "cefrLevel": "C1"
  },
  {
    "word": "captivating",
    "partOfSpeech": "adjective",
    "definition": "Attracting and holding interest or attention; charming.",
    "week": 1,
    "cefrLevel": "B2"
  },
  {
    "word": "influx",
    "partOfSpeech": "noun",
    "definition": "A large incoming flow or arrival of people or things.",
    "week": 1,
    "cefrLevel": "B2"
  },
  {
    "word": "inundate",
    "partOfSpeech": "verb",
    "definition": "To overwhelm with a large amount of something, such as work or information.",
    "week": 1,
    "cefrLevel": "C1"
  },
  {
    "word": "egocentric",
    "partOfSpeech": "adjective",
    "definition": "Viewing everything in relation to oneself; self-centered.",
    "week": 1,
    "cefrLevel": "C1"
  },
  {
    "word": "demolish",
    "partOfSpeech": "verb",
    "definition": "To completely destroy or tear down a building or structure.",
    "week": 1,
    "cefrLevel": "B2"
  },{
    "word": "disconcerted",
    "partOfSpeech": "adjective",
    "definition": "Feeling unsettled, confused, or embarrassed.",
    "week": 1,
    "cefrLevel": "C1"
  },
    {
    "word": "banter",
    "partOfSpeech": "noun",
    "definition": "Playful or friendly exchange of teasing remarks.",
    "week": 1,
    "cefrLevel": "B2"
  },
  {
    "word": "bestow",
    "partOfSpeech": "verb",
    "definition": "To give something as an honor or present.",
    "week": 1,
    "cefrLevel": "C1"
  },
  {
    "word": "bigotry",
    "partOfSpeech": "noun",
    "definition": "Intolerance towards those who are different or hold different views.",
    "week": 1,
    "cefrLevel": "C1"
  },
  {
    "word": "cede",
    "partOfSpeech": "verb",
    "definition": "To give up power or territory.",
    "week": 1,
    "cefrLevel": "B2"
  },
  {
    "word": "tamp down",
    "partOfSpeech": "phrasal verb",
    "definition": "To reduce the amount, level, size, or importance of something.",
    "week": 1,
    "cefrLevel": "C1"
  },
  {
    "word": "cupid",
    "partOfSpeech": "noun",
    "definition": "A figure in Roman mythology who causes people to fall in love, often depicted as a young boy with wings and a bow and arrow.",
    "week": 1,
    "cefrLevel": "B2"
  },
  {
    "word": "corral",
    "partOfSpeech": "verb",
    "definition": "To gather together and confine (a group of people or things).",
    "week": 1,
    "cefrLevel": "C1"
  },
  {
    "word": "commence",
    "partOfSpeech": "verb",
    "definition": "To begin or start.",
    "week": 1,
    "cefrLevel": "B2"
  },
  {
    "word": "contort",
    "partOfSpeech": "verb",
    "definition": "To twist or bend out of the normal shape.",
    "week": 1,
    "cefrLevel": "C1"
  }
]
;



const runtimeConfig = useRuntimeConfig()
console.log(runtimeConfig.API_KEY)
/* console.log(runtimeConfig.apiSecret) */

function getWordsFromObjectArray(objectArray) {
  const words = objectArray.map((item) => item.word);
  console.log(words)
  return words;
}

let myWords = getWordsFromObjectArray(words);

let API_KEY = runtimeConfig.API_KEY

const arr = [];

/* myWords.map(async element => {
  const {data:a} = await useFetch("https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(element))
  
  arr.push(a._rawValue.hits[0].pageURL);
  
  
  return arr;

}); */

console.log(arr) 









</script>

<style >
.main{
  min-height: 100vh;
}
</style>