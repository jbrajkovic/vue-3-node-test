<template>
  <div class="hello">
    <ul>
      <li v-for="x in 2000" :key="x">{{x}}</li>
    </ul>
  </div>
</template>

<script>
import { onUnmounted } from 'vue';
export default {
  name: 'Component1Test',
  mounted() {
    console.log('mounted');
  },
  setup() {
    onUnmounted(() => {
      console.log('unmounted COMPONENT 1');
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
