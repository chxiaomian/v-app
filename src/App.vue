<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <Vcon name="add"></Vcon> -->
    <transition name="fade" keep-alive>
      <router-view/>
    </transition>
    <v-tabbar></v-tabbar>
  </div>
</template>

<script>
import tabbar from './components/tabbar'
export default {
  name: 'app',
  components: {
    'v-tabbar': tabbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin-bottom:45px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}

</style>
