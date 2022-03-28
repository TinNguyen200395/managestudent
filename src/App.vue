<template>
  <div id="app">
  <div style="margin-left:80%">
    <button style="margin-bottom:15px;background-color:#FFF;border: solid 1px green;"
    
      v-for="entry in languages"
      :key="entry.title"
      @click="changeLocale(entry.language)"
    >
        <country-flag :country="entry.flag" size='normal' v-bind:squared="false"/>
    </button>
    </div>

 <el-menu
      mode="horizontal"
      background-color="#67C23A"
      text-color="#fff"
      active-text-color="#ffd04b"
    >      <el-menu-item style="margin-left: 42%">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link :to="{ name: 'TestRouter1' }">TestRouter</router-link>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CrudVue from "./components/crud-vue/crud-vue.vue";
import i18n from "@/i18n";

@Component({
  components: {
    CrudVue,
  },
})
export default class App extends Vue {
  languages = [
    { flag: "us", language: "en", title: "English" },
    { flag: "vn", language: "vi", title: "Tiếng Việt" },
  ];
  changeLocale(locale: string) {
    i18n.locale = locale;
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
