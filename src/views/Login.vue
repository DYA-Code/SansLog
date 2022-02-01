<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    import { defineComponent, onMounted } from 'vue'
    import Nav from '../components/Nav.vue'
    import axios from 'axios'
import Footer from "../components/Footer.vue";

    let res = []

    export default defineComponent ({
        name: 'LoginPage',
        components: {
          Footer,
            Nav
        },
        setup() {
            onMounted(async () => {
                try {
                    const response = (await axios.get("http://localhost:1234/getUsr")).data
                    console.log(response)
                    res = response
                    
                } catch (error) {
                    console.error(error);
                }
            })

            let usrInfo:any = ({
                nameValue: '',
                passwdValue: ''

            })
            return {
                usrInfo
            }

        },
        methods: {
            onLogin: async function () {
                // console.log(`usrnameValue: ${this.usrInfo.nameValue}`)
                for (let i = 0; i < res.length; i++) {
                    if (res[i].usrname == this.usrInfo.nameValue) {
                        if (res[i].usrpasswd == this.usrInfo.passwdValue) {
                            console.log('Login Yes')
                            window.sessionStorage.setItem("usrId", this.usrInfo.nameValue)

                            document.location.href = '/'; break
                        }
                    }
                }
            }
        }
    })
</script>

<template>
    <Nav />
    
    <div class="Menu">
        <div class="title text-5xl ml-72 mt-32 my-5">
            <span class="font-medium">Login and</span> <span class="font-semibold">Write</span>
        </div>
        
        <div class="w-96 relative ml-72 mt-16 loginForm mb-52">
            <form class="bg-gradient-to-r from-cyan-700 to-purple-700 drop-shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-200 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <p>{{ usrInfo.nameValue }}</p>
                    <input v-model="usrInfo.nameValue" class="bg-gradient-to-r from-cyan-600 to-purple-600 shadow border-cyan-400 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-200 text-sm font-bold mb-1" htmlFor="password">
                        Password
                    </label>
                    <input v-model="usrInfo.passwdValue" class="text-white bg-gradient-to-r from-cyan-600 to-purple-600 shadow border-cyan-400 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Password"/>
                </div>
                <div class="flex items-center justify-between">
                    <button v-on:click="onLogin()" class="loginBtn px-5 py-3 bg-gradient-to-r from-cyan-700 to-purple-700 rounded-md shadow-blue-800 drop-shadow-xl hover:drop-shadow-2xl text-white" type="button">
                        Sign In
                    </button>
                </div>
            </form>
                <p class="text-center text-gray-200 text-xs">
                    &copy;2022 DIA. All rights reserved.
                </p>
        </div>
    </div>

    <Footer />
</template>

<style>
</style>
