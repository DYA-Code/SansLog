<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import {defineComponent} from "vue";
import axios from "axios";
export default defineComponent ({
  name: 'View',
  components: {
    Nav,
    Footer
  },
  data: function() {
    return {
      viewTitle: '',
      viewContent: ''
    }
  },
  async mounted() {
    try {
      const response = (await axios.get("http://localhost:1234/getConts")).data
      // console.log(response)
      this.viewTitle = response[window.sessionStorage.getItem("viewItem")].title; this.viewContent = response[window.sessionStorage.getItem("viewItem")].contents

    } catch (error) {
      console.error(error)
    }
  }
})

</script>

<template>
  <Nav />

  <div class="Menu">
    <div class="title text-5xl ml-96 mt-32 my-5 mb-52">
<!--      <span class="font-medium">Read the</span> <span class="font-semibold">Content</span>-->
      <div class="font-semibold">{{ viewTitle }}</div>
      <div class="font-medium">{{ viewContent }}</div>
    </div>
  </div>

  <Footer />
</template>

<style>
</style>
