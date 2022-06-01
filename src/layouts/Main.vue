<template>
  <div id="main">
    <button @click="test = 'test1'">Overview</button>
    <button @click="test = 'test2'">Eventview</button>

    <Component1 v-if="test === 'test1'"/>
    <Component2 v-if="test === 'test2'"/>
  </div>
</template>

<script>
import Component1 from '@/components/Component1'
import Component2 from '@/components/Component2'

export default {
  name: 'AppMain',
  components: {
    Component1,
    Component2,
  },
  data() {
    return {
      test: '',
    };
  },

}
</script>
