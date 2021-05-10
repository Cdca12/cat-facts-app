<template>
  <div class="randomFact m-4">
    Discover a new random fact!
    <br />
    <br />
    <button @click="getRandomFact" type="button" class="btn btn-primary">
      Get Random Fact
    </button>
    <hr />
    <div v-if="Object.keys(fact).length != 0">
      {{ fact.type }}
      <br />
      {{ fact.text }}
      <br />
      <span :style="verifiedColor">
        {{
          fact.status.verified
            ? "Verificado"
            : "Sin información sobre su verificación"
        }}
      </span>
      <br />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "RandomFact",
  components: {},
  computed: {
    ...mapState(["fact"]),
    verifiedColor() {
      return this.fact.status.verified ? { color: "green" } : { color: "red" };
    },
  },
  methods: {
    ...mapActions(["getRandomFact", "clearFact"]),
  },
  created() {
    // Esto evita mostrar un Fact que previamente se consulto su Detalle
    this.clearFact();
  },
};
</script>

<style>
.randomFact {
  font-size: 18px;
}

</style>