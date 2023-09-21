<template>
  <div>
    <div @click="open = !open" class="header">
      <span v-if="open"> &#x25B2; Collapse </span>
      <span v-else>&#x25BC; Expand</span>
    </div>

    <slot v-if="open"></slot>
  </div>
</template>

<script>
export default {
  name: 'CollapsibleSection',
  data: () => ({ open: true }),
};
</script>

<style scoped>
.header {
  background-color: gray;
  padding: 4px;
  cursor: pointer;
  user-select: none;
}
</style>
