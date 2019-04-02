<template>
  <a-layout-header :style="{background: '#fff', padding: 0}">
    <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="setCollapsed"/>
  </a-layout-header>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    setCollapsed() {
      this.collapsed = !this.collapsed;
      this.$emit("collapseddata", this.collapsed);
    }
  }
};
</script>
<style lang="sass" scoped>

</style>
