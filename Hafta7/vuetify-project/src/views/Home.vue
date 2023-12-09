<template>
  <HelloWorld title="patika tablo" @addItem="changePage" />
</template>

<script >
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  components: {
    HelloWorld: HelloWorld,
  },
  methods: {
    changePage() {
      // this.getProducts();
    },
  },
};
</script>
