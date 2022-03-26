<template>
  <div id="app">
     <router-link :to="{ name: 'Home' }">(Home)</router-link> |




    <router-link :to="{ name: 'TestRouter1' }">(TestRouter1)</router-link> |

    <router-view></router-view>
     
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CrudVue from './components/crud-vue/crud-vue.vue'

@Component({
  components: {
    CrudVue
  },
})
export default class App extends Vue {}
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
