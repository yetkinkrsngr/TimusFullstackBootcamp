<template>
  <div>
    <div class="d-flex flex-row justify-center align-center h-100">
      <h1>
        {{ counter.count }}
      </h1>
      <h2>
        {{ counter.isCountOdd ? "tek" : "çift" }}
      </h2>
      <h2>{{ counter.doubleCount }}</h2>
      <v-btn @click="counter.increment()">Arttır</v-btn>
      <div>
        <v-btn @click="counter.increment(2)">Çift artır</v-btn>
      </div>
      <div>
        <v-btn @click="counter.getProducts()">Get All Products</v-btn>
      </div>
    </div>
    <pre>
    {{ counter.products }}
  </pre
    >
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/app";
const counter = useAppStore();
</script>
