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
        { to: '/home', name: 'Home' },
        { to: '/pokemon/50', name: 'Pokemon by id' },
        { to: '/about', name: 'About' },
        { to: 'https://www.google.com', name: 'Google' },
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
