<template>
  <div class="back-top" >
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop",
}
</script>

<style lang="scss" scoped>
  .back-top{
    position: fixed;

    right: 10px;
    bottom: 51px;
    img{
      width: 43px;
      height: 43px;
    }
  }
</style>
