<template>
  <div>
    RandomFact
    <br />
    <br />
    <button @click="getRandomFact" type="button" class="btn btn-primary">
      Obtener dato
    </button>
    <hr />
    <div v-if="Object.keys(fact).length != 0">
      {{ fact.type }}
      <br />
      {{ fact.text }}
      <br />
      {{
        fact.status.verified
          ? "Verificado"
          : "Sin información sobre su verificación"
      }}
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
</style>