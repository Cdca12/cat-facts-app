<template>
  <div class="m-4">
    <Card
      v-for="fact in facts"
      :key="fact._id"
      :id="fact._id"
      :text="fact.text"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
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

