<template>
  <div class="p-4 bg-white">
    <nav class="flex justify-between items-center  p-4 ">
      <nuxt-link class="text-orange-500 text-2xl" to="/">Home</nuxt-link>
      <nuxt-link class="text-orange-500 text-2xl" @click="goBack">Back</nuxt-link>
    </nav>
  <!-- <div class="flex justify-between items-start flex-wrap gap-4">
    <div class="bg-white rounded-md" v-for="b in blogs" v-bind:key="b.id">
      <div class="max-w-xs mb-2">
        <div class="flex justify-between items-center">
          <nuxt-link class="text-3xl p-3" :to="`blogs/${b.id}`">{{ b.title }}</nuxt-link>
          
        </div>
        <p class="text-black p-3">{{ b.content }}</p>
      </div>
    </div>
  </div> -->

<iframe loading="lazy" style="position: relative; width: 100%; height: 98vh; max-height: 98vh; border: none; border-radius: 8px; padding: 0; margin: 0; overflow: hidden;"
      src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGH1u4AvXM&#x2F;YI3oYaMfOqMhkC9vl_ADCw&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
    </iframe>


</div>

</template>

<script setup>


const goBack = () => {
  window.history.back();
};

 
</script>