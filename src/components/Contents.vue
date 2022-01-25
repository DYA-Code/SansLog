<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    import {defineComponent, onMounted} from "vue";
    import axios from "axios";
    let r3s = []
    export default defineComponent ({
        name: 'ContentsComp',
        setup() {
            onMounted(async () => {
                r3s = (await axios.get("http://localhost:1234/getConts")).data
                console.log(r3s)

                for (let i = 0; i < r3s.length; i++) {
                    tt.push(r3s[i].title)
                    ct.push(r3s[i].contents)
                }
            })

            let tt = []
            let ct = []

            return {
                tt,
                ct
            }
        }
    })
</script>

<template>

    <div v-for="i in tt.length" class="w-72 shadow-lg ml-96 mr-20 mb-20 mt-20 hover:scale-110 hover:-translate-y-1 duration-100">
        <img class="w-72" src="https://i.ibb.co/prBm3hN/dia.png" alt="DIA!">

        <div class="px-6 py-4 bg-gradient-to-r from-cyan-700 to-purple-700">
            <div class="font-bold text-xl mb-2">{{ tt[i] }}</div>  <!-- Title -->
            <p class="text-base text-gray-100">{{ ct[i] }}</p>  <!-- Content -->
        </div>
    </div>
</template>

<style>
</style>
