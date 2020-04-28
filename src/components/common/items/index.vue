<template>
  <ul>
    <div>{{count}}</div>
    <li
      v-for="item in items"
      :key="item.id">
      {{ item.title }} - {{ item.price }}
      <br>
      <button
        :disabled="!item.inventory"
        @click="addItem(item)">
        Randomize
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState({
    items: ({ items }) => items.items,
    count: ({ moduleB }) => moduleB.count,
  }),
  methods: mapActions('moduleB', [
    'addItem'
  ]),
  created () {
    this.$store.dispatch('items/getAllItems')
  }
}
</script>