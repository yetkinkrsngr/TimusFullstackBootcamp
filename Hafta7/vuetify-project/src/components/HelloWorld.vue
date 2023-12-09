<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <h2 class="mb-6">{{ title }}</h2>
      <v-row class="ga-3">
        <v-text-field v-model="newItem.name" label="name" />
        <v-text-field v-model="newItem.calories" label="calories" />
        <v-text-field v-model="newItem.fat" label="fat" />
      </v-row>
      <v-row class="ga-3">
        <v-text-field v-model="newItem.carbs" label="carbs" />
        <v-text-field v-model="newItem.protein" label="protein" />
        <v-text-field v-model="newItem.iron" label="iron" />
      </v-row>
      <div class="bg-yellow my-4" v-if="vegetables.length > 7">
        yetersiz alan
      </div>
      <v-btn
        class="w-100 my-12"
        variant="elevated"
        color="indigo-darken-4"
        @click="addItem"
        v-else-if="isNewItemCanAdd"
        :disabled="addButtonDisableStatus"
      >
        {{ vegetables.length > 3 ? "3 ten fazla hala ekle" : "az var davam" }}
      </v-btn>
      <div v-else class="bg-red my-4">
        yeni eleman eklemek için premium ol !
      </div>
      <div>
        {{
          (isNewItemCanAdd && vegetables.length > 3) || vegetables.length
            ? ""
            : ""
        }}
      </div>
      <div
        class="d-flex flex-row justify-space-between"
        v-for="(item, index) in vegetables"
        :key="index"
      >
        <h4>{{ item.name }}</h4>
        <div>{{ item.calories }}</div>
        <div>{{ item.fat }}</div>
        <div>{{ item.carbs }}</div>
        <div>{{ item.protein }}</div>
        <div>{{ item.iron }}</div>
        <v-btn text @click="deleteItem(index)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>
      <v-alert
        v-if="showAlert"
        type="success"
        title="Dikkat"
        text="Artık Ekleyemezsin !!"
        closable
      />
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      vegetables: [
        {
          name: "Spinach",
          calories: 23,
          fat: 0.4,
          carbs: 3.6,
          protein: 2.9,
          iron: "15%",
        },
        {
          name: "Kael",
          calories: 49,
          fat: 0.9,
          carbs: 8.8,
          protein: 4.3,
          iron: "16%",
        },
        {
          name: "Broccoli",
          calories: 34,
          fat: 0.4,
          carbs: 6.6,
          protein: 2.8,
          iron: "6%",
        },
        {
          name: "Brussels Sprouts",
          calories: 43,
          fat: 0.3,
          carbs: 8.9,
          protein: 3.4,
          iron: "9%",
        },
        {
          name: "Avocado",
          calories: 160,
          fat: 15,
          carbs: 9,
          protein: 2,
          iron: "3%",
        },
        {
          name: "Sweet Potato",
          calories: 86,
          fat: 0.1,
          carbs: 20.1,
          protein: 1.6,
          iron: "3%",
        },
      ],
      newItem: {
        name: "",
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
        iron: "",
      },
      isNewItemCanAdd: true,
      showAlert: false,
    };
  },
  computed: {
    addButtonDisableStatus() {
      return this.vegetables.length > 5;
    },
    vegetablesLength() {
      return this.vegetables.length;
    },
  },
  methods: {
    deleteItem(i) {
      this.vegetables.splice(i, 1);
    },
    addItem() {
      this.vegetables.push(this.newItem);
      this.$emit("addItem", this.newItem);
    },
  },
  watch: {
    vegetablesLength(newVal, oldVal) {
      if (newVal === 6 && oldVal === 5) {
        this.showAlert = true;
      }
    },
  },
};
</script>
