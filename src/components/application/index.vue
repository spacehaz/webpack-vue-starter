<template>
  <div>
    <Header title="you suck"></Header>
    <Items></Items>
    <Footer></Footer>
  </div>
</template>

<script>
  import { Header, Footer, Items } from 'components/common'
  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      Items
    }
  }
</script>

<style module>
  .red {
    color: red;
  }
  .bold {
    font-weight: bold;
  }
</style>

