<template>
  <a
    v-if="isExternalLink"
    :href="link.to"
    class="normal-link"
    target="_blank"
    >{{ link.name }}</a
  >
  <router-link v-else :to="route" v-slot="{ isActive }">
    <a :class="isActive ? 'is-active' : 'normal-link'">{{ link.text }}</a>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isExternalLink() {
      return this.link.to.startsWith('http');
    },
    route() {
      return !this.link.pokemonId
        ? { name: this.link.to }
        : { name: this.link.to, params: { pokemonId: this.link.pokemonId } };
    },
  },
};
</script>

<style scoped>
.is-active {
  color: #42b983;
}

.normal-link {
  color: #2c3e50;
}
</style>
