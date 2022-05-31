<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <SideMenu/>
    <router-view />
</template>
<script>
    //

import SideMenu from './components/SideBar.vue'
export default {
  name: 'App',
        components: {
            SideMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
