<template>
  <div class="main p-4 px-6 m-4 rounded-lg bg-orange-50 overflow-hidden">
    <!-- Navbar -->
    <nav class="flex justify-between items-center  p-4 ">
      <nuxt-link class="text-orange-500 text-2xl" to="/">Home</nuxt-link>
    </nav>

    <h1 class="my-4 text-5xl">Blogs!</h1>

    <div class="flex justify-between items-start flex-wrap gap-4">
      <div class="bg-white rounded-md" v-for="b in blogs" v-bind:key="b.id">
        <div class="max-w-xs mb-2">
          <div class="flex justify-between items-center">
            <nuxt-link class="text-3xl p-3" :to="`blogs/${b.whereTo}`">{{ b.title }}</nuxt-link>
          </div>
          <p class="text-black p-3 trunca">{{ b.contentBrief }}</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="flex justify-center items-center  p-4  mt-4">
      <nuxt-link class="text-orange-500 text-xl" @click="goBack">Previous Page</nuxt-link>
    </footer>
  </div>
</template>

<script setup>
const goBack = () => {
  window.history.back();
};


const blogs = [
  {
    "id":1,
    "title": "Adverbs - Ostensibly, evidently, presumably",
    "tags": ["reading", "progression"],
    "contentBrief":"📚 This week, we're diving into the world of words! 🤓 We'll explore words with examples, stories, and quizzes",
    "whereTo":"adverbs1"
  },
  {
    "id":2,
    "title":"Some vocab to describe EU structure ",
    "contentBrief": "Discover the rich meanings and origins of tapestry, bedrock, partake, and epitomize in our captivating blog.",
    "tags": ["reading", "skimming"],
    "whereTo":"adverbs2"

  },
  {
    "id":3,
    "title":"B2 level vocabulary booster ",
    "contentBrief": "Discover the meanings of these B2 level words!🥳",
    "tags": ["reading", "skimming"],
    "whereTo":"vocab-lure"

  },
  {
    "id":4,
    "title":"Synonyms for emphasize ",
    "contentBrief": "Discover the ways of using the verb in a different way!🥳",
    "tags": ["reading", "skimming"],
    "whereTo":"emphasize"

  }
  
  
];











</script>

<style >
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
footer {
  margin-top: auto;
}
</style>