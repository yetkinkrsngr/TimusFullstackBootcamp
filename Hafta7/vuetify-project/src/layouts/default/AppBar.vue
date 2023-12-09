<template>
  <v-app-bar flat class="bg-red d-flex flex-row">
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />

      PAtika
    </v-app-bar-title>
    <v-spacer />
    <v-btn @click="toggleTheme">toggle theme</v-btn>
  </v-app-bar>
</template>

<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>
