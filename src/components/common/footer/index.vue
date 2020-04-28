<template>
  <footer :class="$style.container">
    footer
  </footer>
</template>

<script>
  import { mapSagas } from 'vuex-saga';
  export default {
    name: 'Footer',
    methods: {
      ...mapSagas({
        test: "moduleB/testSaga"
      })
    },
    created() {
      this.test({ test: 'Hello!' })
        .then((res) => {
          console.log('finished saga', res)
        })
    }
  }
</script>

<style module>
  .container {
    height: 60px;
    border: 1px solid black;
  }
</style>
