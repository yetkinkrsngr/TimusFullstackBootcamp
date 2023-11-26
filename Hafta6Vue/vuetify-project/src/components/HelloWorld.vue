<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-text-field v-model="name" :label="nameLabel" :variant="variant" />
      <div
        :class="{ centerArea: isCenter }"
        :style="{ color: name, fontSize: fontSize + 'px' }"
      >
        <v-btn @click="sendName(name)">Send Name</v-btn>
        <h3>{{ name }}</h3>
        <h3>{{ fullName }}</h3>
      </div>
      <input class="new-input mr-n2" label="input∆" />
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "halil",
      middleName: "ibrahim",
      surname: "hürmüz",
      nameLabel: "İsim giriniz",
      variant: "outlined",
      data2: {},
      activeColor: "red",
      fontSize: 32,
      centerArea: "d-flex flex-row justify-space-between align-center",
      isCenter: false,
      userColor: "",
    };
  },
  computed: {
    fullName() {
      return this.name + this.middleName + this.surname;
    },
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  // beforeDestroy() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    sendName(val) {
      console.log(this.nameLabel);
      this.alertBig(val);
    },
    alertBig(val) {
      alert(val);
    },
  },
  watch: {
    name(val, oldVal) {
      console.log("watch: " + val, "oldVal: " + oldVal);
    },
  },
};
</script>

<style scoped>
.new-input {
  border: 2px solid black;
  border-radius: 4px;
  height: 60px;
  width: 100%;
}
</style>
