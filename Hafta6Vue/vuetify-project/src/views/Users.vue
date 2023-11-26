<template>
  <v-container>
    <h2>Users</h2>
    <v-flex>
      <v-row class="mt-4">
        <v-text-field class="mr-2" label="username" v-model="username" />
        <v-text-field label="email" v-model="email" />
        <v-icon @click="addUser" size="60" icon="mdi-plus-box" />
      </v-row>
      <v-row>
        <v-card class="w-100" variant="outlined">
          <v-data-table :items="items" dense />
        </v-card>
      </v-row>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      items: [
        {
          id: 0,
          username: "African Elephant",
          email: "Loxodonta africana",
        },
      ],
    };
  },
  methods: {
    addUser() {
      this.items.push({
        username: this.username,
        email: this.email,
        id: Date.now(),
      });
      this.username = "";
      this.email = "";
    },
  },
};
</script>

<style>
.outlined {
}
</style>