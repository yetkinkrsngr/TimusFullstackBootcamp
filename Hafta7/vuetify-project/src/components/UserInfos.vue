<template>
  <div>
    <v-text-field
      v-model="firstName"
      :rules="rules"
      label="First name"
    ></v-text-field>
    <v-btn type="submit" block class="mt-2">Submit</v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>