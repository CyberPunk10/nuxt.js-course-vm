<template>
  <div class="table-squeezings-top-label">
    <div class="cell-input cell-label"></div>
    <div v-for="item in count" :key="item" class="cell-input cell-label">{{ item }}</div>
    <div @input="$emit('addcol', ++this.count)" class="cell-input cell-label cell-plus">+</div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      require: true
    }
  },
}
</script>

<style lang="sass">

</style>
