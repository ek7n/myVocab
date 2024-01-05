<template>
  <div class="p-4 px-6 m-4 rounded-lg  bg-orange-50 mai">
    <nuxtLink class="text-orange-500 text-2xl" to="/"> Home </nuxtLink>
    <h1 class="my-4 text-5xl">Words!</h1>
    <!-- <div class="flex  justify-between align-start flex-wrap  gap-2 ">
<div class="bg-white  rounded-md " v-for="week in weeks" v-bind:key="week.id">
      <div class="p-6">
        <nuxtLink class="text-3xl p-3" to="/a">Week {{week}}</nuxtLink>
      </div>
    </div>
    </div> -->
  
    <div class="flex justify-between align-start flex-wrap  gap-4 max-w-">
      <div class="bg-white  rounded-md" v-for="w in words" v-bind:key="w.id">
        <div class="max-w-xs mb-2">
         <!--  <img src="https://cdn.pixabay.com/photo/2014/07/02/13/39/media-room-382157_1280.jpg" alt="" srcset=""> -->
          <!-- <img  :src="`https://pixabay.com/api/?key=38569171-f1197dd247f175e2d3791625a&q=${w.word}`" alt="Placeholder image"> -->
         <!--  <img  :src="arr[w.index]" alt="Placeholder image"> -->
          
       <div class="flex justify-between ">
         <nuxtLink class="text-3xl  p-3 " :to="`words/${w.word}`">{{w.word}}</nuxtLink>
        <div v-if="w.partOfSpeech=='noun'" class="has-textweight-black bg-green-200 m-2 p-2 rounded-md ">{{w.partOfSpeech}}</div>
        <div v-if="w.partOfSpeech=='verb'" class="has-textweight-black bg-orange-200 m-2 p-2 rounded-md ">{{w.partOfSpeech}}</div>
        <div v-if="w.partOfSpeech=='adjective'" class="has-textweight-black bg-purple-200 m-2 p-2 rounded-md ">{{w.partOfSpeech}}</div>
       </div>
        <p class="has-textweight-black p-3 truncat is-size-2">{{w.definition}}</p>
        </div><!-- <p>{{w.word}}</p> -->
        
        
    </div>
    </div>
    
  </div>
</template>

<script setup>

const weeks =[1,2,3,4]

const words = [
  {
    word: "subvert",
    partOfSpeech: "verb",
    definition: "To undermine the power or authority of something, often in a covert or secretive manner.",
    week: 1
  },
  {
    word: "comportment",
    partOfSpeech: "noun",
    definition: "Conduct or behavior, especially in terms of manners or deportment.",
    week: 1
  },
  {
    word: "disconcerted",
    partOfSpeech: "adjective",
    definition: "Feeling unsettled, confused, or embarrassed.",
    week: 1
  },
  {
    word: "avert",
    partOfSpeech: "verb",
    definition: "To prevent or turn away from something undesirable or dangerous.",
    week: 1
  },
  {
    word: "contentious",
    partOfSpeech: "adjective",
    definition: "Causing or likely to cause an argument or disagreement.",
    week: 1
  },
  {
    word: "resurgence",
    partOfSpeech: "noun",
    definition: "A revival or renewal of activity or strength; a comeback.",
    week: 1
  },
  {
    word: "dismantle",
    partOfSpeech: "verb",
    definition: "To take apart or disassemble something, especially a structure or system.",
    week: 1
  },
  {
    word: "alluding",
    partOfSpeech: "verb",
    definition: "To suggest or indirectly mention something without explicitly stating it.",
    week: 1
  },
  {
    word: "entail",
    partOfSpeech: "verb",
    definition: "To involve or require as a necessary part or consequence.",
    week: 1
  },
  {
    word: "vehement",
    partOfSpeech: "adjective",
    definition: "Showing strong feeling or intense conviction; passionate.",
    week: 1
  },
  {
    word: "captivating",
    partOfSpeech: "adjective",
    definition: "Attracting and holding interest or attention; charming.",
    week: 1
  },
  {
    word: "influx",
    partOfSpeech: "noun",
    definition: "A large incoming flow or arrival of people or things.",
    week: 1
  },
  {
    word: "inundate",
    partOfSpeech: "verb",
    definition: "To overwhelm with a large amount of something, such as work or information.",
    week: 1
  },
  {
    word: "egocentric",
    partOfSpeech: "adjective",
    definition: "Viewing everything in relation to oneself; self-centered.",
    week: 1
  },
  {
    word: "demolish",
    partOfSpeech: "verb",
    definition: "To completely destroy or tear down a building or structure.",
    week: 1
  },
  {
    word: "enigmatic",
    partOfSpeech: "adjective",
    definition: "Mysterious, puzzling, or difficult to understand.",
    week: 2
  },
  {
    word: "chasm",
    partOfSpeech: "noun",
    definition: "A deep fissure, crack, or gap in the earth's surface.",
    week: 2
  },
  {
    word: "uphold",
    partOfSpeech: "verb",
    definition: "To support, maintain, or defend something, especially a principle or law.",
    week: 2
  },
  {
    word: "vindicate",
    partOfSpeech: "verb",
    definition: "To clear someone of blame or suspicion; to justify or prove right.",
    week: 2
  },
  {
    word: "lucid",
    partOfSpeech: "adjective",
    definition: "Clear and easily understood; rational and sane.",
    week: 2
  },
  {
    word: "reverberate",
    partOfSpeech: "verb",
    definition: "To be repeated several times as an echo; to have a continuing and serious effect.",
    week: 2
  },
  {
    word: "cogent",
    partOfSpeech: "adjective",
    definition: "Clear, logical, and convincing; persuasive.",
    week: 2
  },
  {
    word: "allure",
    partOfSpeech: "noun/verb",
    definition: "The quality of being powerfully and mysteriously attractive or fascinating.",
    week: 2
  },
  {
    word: "turmoil",
    partOfSpeech: "noun",
    definition: "A state of great disturbance, confusion, or uncertainty.",
    week: 2
  },
  {
    word: "exacerbate",
    partOfSpeech: "verb",
    definition: "To make a problem, situation, or feeling worse; to intensify.",
    week: 2
  },
  {
    word: "desecrate",
    partOfSpeech: "verb",
    definition: "To treat a sacred place, object, or symbol with disrespect or irreverence.",
    week: 2
  },
  {
    word: "corroborate",
    partOfSpeech: "verb",
    definition: "To confirm or give support to a statement, theory, or finding; to back up.",
    week: 2
  },
  {
    word: "fluster",
    partOfSpeech: "verb",
    definition: "To make someone agitated, confused, or nervous.",
    week: 2
  },
  {
    word: "labyrinth",
    partOfSpeech: "noun",
    definition: "A complicated network of passages or paths, in which it is difficult to find one's way; a maze.",
    week: 2
  },
  {
    word: "accentuate",
    partOfSpeech: "verb",
    definition: "To emphasize or give prominence to something.",
    week: 2
  },
   {
    word: "benign",
    partOfSpeech: "adjective",
    definition: "Gentle, kind, and harmless; not causing harm or danger.",
    week: 3
  },
  {
    word: "conundrum",
    partOfSpeech: "noun",
    definition: "A confusing and difficult problem or question; a puzzle.",
    week: 3
  },
  {
    word: "lavish",
    partOfSpeech: "adjective",
    definition: "Sumptuously rich, elaborate, or luxurious.",
    week: 3
  },
  {
    word: "apprehensive",
    partOfSpeech: "adjective",
    definition: "Anxious or fearful that something bad or unpleasant will happen.",
    week: 3
  },
  {
    word: "caustic",
    partOfSpeech: "adjective",
    definition: "Sarcastic in a scathing and bitter way.",
    week: 3
  },
  {
    word: "elusive",
    partOfSpeech: "adjective",
    definition: "Difficult to find, catch, or achieve; hard to grasp mentally.",
    week: 3
  },
  {
    word: "laconic",
    partOfSpeech: "adjective",
    definition: "Using very few words; brief and to the point.",
    week: 3
  },
  {
    word: "diabolical",
    partOfSpeech: "adjective",
    definition: "Characteristic of the devil; wicked or evil.",
    week: 3
  },
  {
    word: "mitigate",
    partOfSpeech: "verb",
    definition: "To make less severe, painful, or harsh; to alleviate.",
    week: 3
  },
  {
    word: "revere",
    partOfSpeech: "verb",
    definition: "To feel deep respect or admiration for something; to venerate.",
    week: 3
  },
  {
    word: "recede",
    partOfSpeech: "verb",
    definition: "To move back or away from a previous position; to retreat.",
    week: 3
  },
  {
    word: "robust",
    partOfSpeech: "adjective",
    definition: "Strong and healthy; vigorous and full of strength.",
    week: 3
  },
  {
    word: "vehement",
    partOfSpeech: "adjective",
    definition: "Showing strong feeling or intense conviction; passionate.",
    week: 3
  },
  {
    word: "discern",
    partOfSpeech: "verb",
    definition: "To perceive or recognize something with difficulty by the senses or intellect.",
    week: 3
  },
  {
    word: "mendacious",
    partOfSpeech: "adjective",
    definition: "Not telling the truth; lying or dishonest.",
    week: 3
  }
];



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