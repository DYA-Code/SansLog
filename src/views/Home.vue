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

        } catch (error) {
          console.error(error)
        }
      },
      methods: {
        onClick: async function () {
          document.location.href = '/login'
        },
        onClickView: async function ( a ) {
          window.sessionStorage.setItem("viewItem", a)
          document.location.href = '/view'
          console.log(a)
        },
        Write: async function () {
          document.location.href = '/write'
        }
      }
    })

</script>

<template>
    <Nav />
    
    <div class="Menu text-center mb-52">
        <div class="title text-5xl relative ml-28 right-1/4 mt-32 my-5">
            <span class="font-medium">Wa</span> <span class="font-semibold">Sans</span>
        </div>
        <div class="sub-title text-2xl relative ml-44 right-1/4 font-medium my-5">I want to play Bedwars</div>
        <button class="loginBtn px-5 py-3 relative ml-2 right-1/4 my-5 bg-gradient-to-r from-cyan-700 to-purple-700 rounded-md shadow-blue-800 drop-shadow-xl hover:drop-shadow-2xl text-white" v-on:click="onClick()">Sign in</button>
    </div>
  
    <Footer />
</template>

<style>
</style>
