<template>
  <div class="count-number" :style="{color: color, fontSize: size + 'px'}">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'countNumber',
  props: {
    color: {
      type: String,
      default: 'red'
    },
    size: {
      type: String,
      default: '12'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>