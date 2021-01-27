<template>
  <div class="P403">
    <!-- main -->
    <section class="P403-main">
      <img
        src="@/assets/images/errors/403.png"
        alt=""
      >
      <p>抱歉，智能供应链决策引擎只向特定账号开放！</p>
      <div>
        <el-button
          type="primary"
          @click="service"
        >
          服务咨询
        </el-button>
        <el-button @click="$router.push('/')">
          返回首页
        </el-button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'P403',
  data() {
    return {};
  },
  methods: {
    service() {
      window.location.href = '//neuhub.jd.com/workorder/init/3/智能供应链决策引擎';
    },
  },
};
</script>

<style lang="scss">
.P403 {
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-header {
    padding: 0 30px 0 31px;
    height: 69px;
    color: $title;
    box-shadow: 0px 4px 4px 0px rgba(71, 98, 254, 0.1);
    background: #ffffff;
    h2 {
      font-size: 24px;
    }
  }
  &-main {
    height: calc(100vh - 230px);
    min-height: 600px;
    text-align: center;
    img {
      margin-top: 100px;
      width: 263px;
      height: 186px;
    }
    p {
      margin: 31px 0 20px;
      font-size: 14px;
      color: #333333;
    }
  }
}
</style>
