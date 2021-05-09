<template>
  <div class="home m-4">
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
import { mapActions, mapState } from 'vuex';

export default {
  name: "Home",
  components: {
    Card,
  },
    computed: {
      ...mapState(["facts"])
    },
  methods: {
    // Nota: No mapear mutations
    ...mapActions(["getFacts"])
  },
  
  created() {
    this.getFacts();
  },
};
</script>

