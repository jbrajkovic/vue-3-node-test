<template>
  <div id="app">

    <button @click="test = 'test1'">Overview</button>
    <button @click="test = 'test2'">Eventview</button>

    <Component1 v-if="test === 'test1'"/>
    <Component2 v-if="test === 'test2'"/>
  </div>
</template>

<script>
import Component1 from './components/Component1.vue'
import Component2 from './components/Component2.vue'

export default {
  name: 'App',
  components: {
    Component1,
    Component2,
  },
  data() {
    return {
      test: '',
      currentTab: Component1,
      tabs: {
        Component1,
        Component2,
      },
    };
  },

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
