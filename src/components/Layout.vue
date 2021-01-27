<template>
  <div class="Layout">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './Header.vue';

export default {
  name: 'Layout',
  components: { Header },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss">
</style>
