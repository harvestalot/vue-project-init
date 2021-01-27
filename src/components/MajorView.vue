<template>
  <div class="MajorView">
    <router-view class="MajorView-content" />
  </div>
</template>

<script>
export default {
  name: 'MajorView',
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss">
.MajorView {
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  &-content {
    flex: 1;
    height: 100%;
    overflow: auto;
  }
}
</style>
