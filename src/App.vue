<template>
  <p class="text-[#ccb]">Hello world</p>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import './index.sass';

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 200px
</style>
