<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'
    import {defineComponent, onMounted} from "vue";
    import axios from "axios";

    let res = []

    export default defineComponent ({
      name: 'Home',
      components: {
        Nav,
        Footer
      },
      data: function() {
        return {
          rres: 0,
          tt: [],
          ct: [],
        }
      },
      async mounted() {
        try {
          const response = (await axios.get("http://localhost:1234/getConts")).data
          this.rres = response.length
          this.tt = []; this.ct = []
          for (let i = 0; i < response.length; i++) { this.tt.push(response[i].title); this.ct.push(response[i].contents) }
          console.log(this.rres)
          console.log(this.tt)

        } catch (error) {
          console.error(error)
        }
      },
      methods: {
        onClick: async function () {
          document.location.href = '/login'
        }
      }
    })

</script>

<template>
    <Nav />
    
    <div class="Menu mb-52">
        <div class="title text-5xl ml-96 mt-32 my-5">
            <span class="font-medium">Wa</span> <span class="font-semibold">Sans</span>
        </div>
        <div class="sub-title text-2xl font-medium ml-96 my-5">I want to play Bedwars</div>
        <button class="loginBtn px-4 py-2 ml-96 my-5 bg-green-400 hover:bg-green-500 rounded-lg text-white" v-on:click="onClick()">Sign in</button>
    </div>

    <!-- Content -->
    <div class="ml-96 flex flex-wrap">
        <div v-for="i in rres" :key="i" class="w-72 shadow-lg mr-32 mb-20 mt-20 hover:scale-110 hover:-translate-y-1 duration-100">
          <img class="w-72" src="https://i.ibb.co/prBm3hN/dia.png" alt="DIA!">

          <div class="px-6 py-4 bg-gradient-to-r from-cyan-700 to-purple-700">
            <div class="font-bold text-xl mb-8">{{ tt[i-1] }}</div>  <!-- Title -->
            <p class="text-base text-gray-100">{{ ct[i-1] }}</p>  <!-- Content -->
          </div>
        </div>
    </div>
  
    <Footer />
</template>

<style>
</style>
