<template>
  <header :class="$style.container">
    <div>{{title}}</div>
    <div>{{now}}</div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      title: String
    },
    methods: {
      updateDate() {
        this.now = new Date();
      }
    },
    data() {
      return {
        now: new Date()
      };
    },
    mounted() {
      console.log('header mounted')
      // setInterval(() => {
      //   this.updateDate();
      // }, 1000);
    }
  }
</script>

<style module>
  .container {
    height: 60px;
    border: 1px solid black;
  }
</style>
