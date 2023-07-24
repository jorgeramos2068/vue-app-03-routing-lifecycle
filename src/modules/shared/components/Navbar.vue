<template>
  <div>
    <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemon', params: { pokemonId: 85 } }">
      Pokemon by id
    </router-link>
    <router-link :to="{ name: 'about' }">About</router-link> -->
    <CustomLink v-for="link in links" :key="link.to" :link="link" />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    CustomLink: defineAsyncComponent(() => import('./CustomLink.vue')),
  },
  data() {
    return {
      links: [
        { to: 'pokemon-home', text: 'Home' },
        { to: 'pokemon-id', text: 'Pokemon by id', pokemonId: 151 },
        { to: 'pokemon-about', text: 'Pokemon About' },
        { to: 'dbz-characters', text: 'Characters' },
        { to: 'dbz-about', text: 'DBZ About' },
        { to: 'https://www.google.com', text: 'Google' },
      ],
    };
  },
};
</script>

<style scoped>
div {
  padding: 0 30px;
}

div a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>
