<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    let usrOnLogin = window.sessionStorage.getItem("usrId")
    if (usrOnLogin === null) { usrOnLogin = "Usr" }
</script>

<template>
    <div class="flex shadow-lg h-20 font-mono items-center">
        <div class="ml-6 mr-6">
            <a class="text-white-500 text-4xl font-bold" href="/">WaSans</a>
        </div>
        <div class="mr-6">
            <a class="font-medium text-xl" href="/login">Sign in</a>
        </div>
        <div class="mr-6">
            <a class="font-medium text-xl" href="/register">Sign up</a>
        </div>
        <div class="mr-96">
            <a class="font-medium text-xl" href="https://github.com/dya-code">Github</a>
        </div>
        <div class="mr-6">
            <a class="font-medium text-xl">{{ usrOnLogin }}</a>
        </div>
    </div>
</template>

<style>
</style>
