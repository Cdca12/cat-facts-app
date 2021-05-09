<template>
  <div class="home">
    Home
    <div v-for="fact in facts" :key="fact._id">
      {{ fact.text }}
      <br /><br />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {},
  data() {
    return {
      facts: [],
    };
  },
  methods: {
    async getFacts() {
      try {
        const res = await fetch("https://cat-fact.herokuapp.com/facts");
        const data = await res.json();
        this.facts = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getFacts();
  },
};
</script>
