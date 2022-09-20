<template>
  <div>
    <h1>Pokemon page: {{ pokemonId }}</h1>
    <div v-if="pokemon">
      {{ pokemon.name }}
      <br />
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pokemon: null,
    };
  },
  created() {
    this.getPokemon();
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`
        ).then(r => r.json());
        this.pokemon = pokemon;
        console.log(pokemon);
      } catch (err) {
        console.log(err);
        this.$router.push('/');
      }
    },
  },
  watch: {
    pokemonId() {
      this.getPokemon();
    },
  },
};
</script>
