<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import {defineComponent} from "vue";
import axios from "axios";
export default defineComponent ({
  name: 'Write',
  components: {
    Nav,
    Footer
  },
  data: function() {
    return {
      writeTitle: '',
      writeContent: ''
    }
  },
  methods: {
    addContent: async function () {
      if (window.sessionStorage.getItem("usrId") != null && this.writeTitle == '' && this.writeContent == '') {
        try {
          const response = (await axios.get(`http://localhost:1234/addConts/${this.writeTitle}/${this.writeContent}`)).data
          console.log(response)
          document.location.href = '/'

        } catch (error) {
          console.error(error)
        }
      } else {
        console.log("Login Please")
        if (this.writeTitle == '' || this.writeContent == '') {
          console.log("Input Anything")
        }
      }
    }
  }
})

</script>

<template>
  <Nav />

  <div class="Menu mb-52">
    <div class="title text-5xl ml-96 mt-32 my-5">
      <!--      <span class="font-medium">Read the</span> <span class="font-semibold">Content</span>-->
      <input v-model="writeTitle" class="bg-gradient-to-r from-cyan-600 to-purple-600 shadow border-cyan-400 rounded w-full py-2 px-3 text-white leading-tight focus:out line-none focus:shadow-outline" type="text" placeholder="Title"/>
      <input v-model="writeContent" class="bg-gradient-to-r from-cyan-600 to-purple-600 shadow border-cyan-400 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Content"/>
    </div>
    <button @click="addContent()" class="onWrite px-5 py-7 drop-shadow-2xl">Done</button>
  </div>

  <Footer />
</template>

<style>
</style>
