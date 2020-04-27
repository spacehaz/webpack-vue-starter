<template>
  <div>
    <Header title="you suck"></Header>
    <h3 :class="$style.red">Users:</h3>
    <Footer></Footer>
  </div>
</template>

<script>
  import { Header, Footer } from 'components/common'

  export default {
    name: 'App',
    components: {
      Header,
      Footer
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

