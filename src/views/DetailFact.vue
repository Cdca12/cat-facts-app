<template>
  <div>
    <div class="alert alert-primary" role="alert">
      {{ fact }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailFact",
  components: {},
  data() {
    return {
      fact: {},
    };
  },
  methods: {
    async getFact() {
      try {
        const res = await fetch(
          `https://cat-fact.herokuapp.com/facts/${this.$route.params.id}`
        );
        const data = await res.json();
        this.fact = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getFact();
  },
};
</script>

<style>
</style>