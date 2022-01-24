<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import Nav from '../components/Nav.vue'
  import { defineComponent } from "vue";
  export default defineComponent ({
      name: 'HomePage',
      components: {
          Nav
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
    
    <div class="Menu">
        <div class="title text-5xl ml-72 mt-32 my-5">
            <span class="font-medium">Wa</span> <span class="font-semibold">Sans</span>
        </div>
        <div class="sub-title text-2xl font-medium ml-72 my-5">I want to play Bedwars</div>
        <button class="loginBtn px-4 py-2 ml-72 my-5 bg-green-400 hover:bg-green-500 rounded-lg text-white" v-on:click="onClick()">Sign in</button>
    </div>
</template>

<style>
</style>
