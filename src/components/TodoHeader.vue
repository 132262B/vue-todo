<template>
  <v-layout style="height: 50px">
    <v-system-bar color="primary">
      <v-icon icon="mdi-wifi-strength-4" class="ml-2"></v-icon>

      <v-icon icon="mdi-signal-cellular-outline" class="ml-2"></v-icon>

      <v-icon icon="mdi-battery" class="ml-2"></v-icon>

      <span class="ml-2">{{ this.$store.state.todoTime }}</span>
    </v-system-bar>
  </v-layout>
</template>

<script>
export default {};
</script>

<style scoped>
</style>