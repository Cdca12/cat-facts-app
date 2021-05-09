<template>
  <div class="alert alert-primary" role="alert">
    {{ text }}
    <br>
    {{ id }}
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    id: [Number, String],
    text: String,
  },
};
</script>

<style>
</style>