<template>
  <h1>Pokemon page: {{ pokemonId }}</h1>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
  },
};
</script>
