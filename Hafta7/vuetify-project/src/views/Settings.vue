<template>
  <v-responsive class="pb-12">
    <div>settings</div>
    <FormContainer v-if="false">
      <template v-slot:centerForm>
        <UserInfos />
      </template>
      <template #footer> 3 gün üçünde size döneceğiz </template>
    </FormContainer>

    <v-card class="ma-12" variant="outlined">
      <v-data-table :items="products">
        <template v-slot:[`item.price`]="{ value }">
          <v-row>{{ value }} 💲</v-row>
        </template>
        <template v-slot:[`item.image`]="{ value }">
          <v-img :src="value"></v-img>
        </template>
        <template v-slot:[`item.rating`]="{ value }">
          <v-rating
            hover
            :length="5"
            :size="32"
            :model-value="value.rate"
            color="orange-lighten-1"
            active-color="orange-lighten-3"
          />
        </template>
      </v-data-table>
    </v-card>
    <v-btn @click="setProduct">Set New Product</v-btn>
    <v-btn @click="updateProduct(3)">updateProduct</v-btn>
    <v-btn @click="deleteProduct(4)">deleteProduct</v-btn>
  </v-responsive>
</template>

<script>
import axios from "axios";
import FormContainer from "@/components/FormContainer.vue";
import UserInfos from "@/components/UserInfos.vue";
export default {
  components: {
    FormContainer,
    UserInfos,
  },
  data() {
    return {
      darkMode: true,
      headers: [{ title: "ID", key: "id" }],
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
      products: [],
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    changeMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    getColor(value) {
      if (value > 0.6) return "red";
      else if (value > 0.4) return "orange";
      else return "green";
    },
    async getProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        this.products = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async setProduct() {
      try {
        const response = await axios.post("https://fakestoreapi.com/products", {
          body: {
            title: "test product",
            price: 13.5,
            description: "lorem ipsum set",
            image: "https://i.pravatar.cc",
            category: "electronic",
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async updateProduct(id) {
      try {
        const response = await axios.put(
          "https://fakestoreapi.com/products/" + id,
          {
            body: {
              title: "test product",
              price: 13.5,
              description: "lorem ipsum set",
              image: "https://i.pravatar.cc",
              category: "electronic",
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteProduct(id) {
      try {
        const response = await axios.delete(
          "https://fakestoreapi.com/products/" + id
        );
        this.products = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
</style>