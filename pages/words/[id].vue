<template>
  <div class="p-4 bg-white">

  <div v-for="w in wordz" v-bind:key="w.id" class="mb-6">
    <div class="flex justify-between gap-4">
      <div>
        <h1 class="text-4xl mb-2">{{ w.word }}</h1>
        <p class="text-lg text-gray-600">{{ w.phonetic }}</p>
      </div>
    </div>

    <div v-for="m in w.meanings" v-bind:key="m.id" class="bg-orange-200 p-4 rounded-md mb-4">
      <div class="flex gap-2 mb-3">
        <div class="bg-orange-400 rounded-md p-2">{{ w.meanings.indexOf(m) + 1 }}</div>
        <p class="bg-orange-400 rounded-md p-2">{{ m.partOfSpeech }}</p>
      </div>

      <div v-for="d in m.definitions" v-bind:key="d.id">
        <p class="mb-2">{{ d.definition }}</p>
        <p class="mb-2 italic">{{ d.example }}</p>

        <div class="flex flex-wrap gap-2 mb-2" v-for="s in d.synonyms" v-bind:key="s.id">
          <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">syn: {{ s }}</span>
        </div>

        <div class="flex flex-wrap gap-2 mb-2" v-for="a in d.antonyms" v-bind:key="a.id">
          <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">ant: {{ a }}</span>
        </div>
      </div>
    </div>
  </div>

  <div v-if="guardLink">
    <div class="flex flex-wrap gap-4">
      <div v-for="item in guardLink.response.results" v-bind:key="item.index" class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="p-6">
          <a :href="item.webUrl" class="font-bold text-xl mb-2 block">{{ item.webTitle }}</a>
          <!-- <p class="text-gray-700 text-base mb-4">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p> -->
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ item.pillarName }}</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ item.sectionName }}</span>
          <a :href="item.webUrl" class="inline-block bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-white">Read More</a>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</div>

</template>

<script setup>
/* const runtimeConfig = useRuntimeConfig() */
const { id } = await useRoute().params
const  {data:wordz}  = await useFetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${id}`)
 
const GUARDIAN_API_KEY = "2bab73a6-7dde-4347-8658-c32b3c6453d9"


const guardianUrl = `https://content.guardianapis.com/search?q=${id}&api-key=${GUARDIAN_API_KEY}`
const  {data:guardLink}  = await useFetch(guardianUrl);

/* console.log("a",guardLink.value.response.results) */

 
</script>