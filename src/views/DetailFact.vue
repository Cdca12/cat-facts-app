<template>
  <div>
    <div class="alert alert-primary" role="alert">
      ID: {{ fact._id }}
      <br>
      Fact: {{ fact.text }}
      <br>
      Fecha de creación: {{ fact.createdAt }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "DetailFact",
  components: {},
  computed: {
    ...mapState(["fact"])
  },
  methods: {
    ...mapActions(["getFact"])
  },
  created() {
    this.getFact(this.$route.params.id);
  },
};
</script>

<style>
</style>