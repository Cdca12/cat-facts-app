<template>
  <div>
    <div class="alert alert-primary m-4" role="alert">
      <span class="text-1">ID:</span>
      <p>{{ fact._id }}</p>
      <span class="text-1">Fact:</span>
      <p>{{ fact.text }}</p>
      <span class="text-1">Fecha de creación:</span>
      <p>{{ fact.createdAt }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "DetailFact",
  components: {},
  computed: {
    ...mapState(["fact"]),
  },
  methods: {
    ...mapActions(["getFact"]),
  },
  created() {
    this.getFact(this.$route.params.id);
  },
};
</script>

<style>
.text-1 {
  font-weight: bold;
  color: #fcbe13;;
}
</style>