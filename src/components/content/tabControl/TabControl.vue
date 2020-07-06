<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles"
         :class="{active: index===currentIndex}"
         @click="itemClink(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClink(index) {
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-control {
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 15px;
  background-color: #fff;

  .tab-control-item {
    height: 40px;
    line-height: 40px;
  }

  .active {
    color: $color-high-text;

    span {
      border-bottom: 3px solid $color-high-text;
    }
  }

}
</style>
