<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-info">
      <p>{{ goodsItem.title}}</p>
      <span class="price">{{ goodsItem.price}}</span>
      <span class="collect">{{ goodsItem.cfav}} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .goods-item{
    flex: 1;
    width: 48%;
    min-width: 48%;
    max-width: 48%;
    img{
      width: 100%;
      border-radius: 5px;
    }
    .goods-info{
      font-size: 14px;
      p{
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
      }
      .price{
        color: $color-high-text;
        margin-left: 20px;
        margin-right: 20px;
      }
      .collect{
        position: relative;
      }
      .collect:before{
        content: '';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
      }
    }
  }
</style>
