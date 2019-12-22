<template>
  <div class="about">
    <h2 class="about-title">{{ value }}</h2>
    <ul class="about-ked">
      <li v-for="item of items" @click="handleClick(item)" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      value: "0",
      items: [
        "AC",
        "+/-",
        "%",
        "÷",
        7,
        8,
        9,
        "x",
        4,
        5,
        6,
        "-",
        1,
        2,
        3,
        "+",
        0,
        ".",
        "="
      ]
    };
  },
  methods: {
    handleClick(mun) {
      if (mun === "AC") {
        return (this.value = 0);
      }
      if (mun === "=") {
        let str = this.value.toString();
        str = str.replace(/÷/, "/");
        str = str.replace(/x/, "*");
        return (this.value = eval(str));
      }
      if (this.value == 0) {
        return (this.value = mun);
      }
      this.value += "" + mun;
    }
  }
};
</script>
<style lang="stylus" scoped>
.about
  height:100%
  .about-title
    background-color #000000
    text-align right
    color white
    line-height 25vw
    font-size 45px
    padding 0
    margin 0
  .about-ked
    padding 0
    list-style none
    margin 0
    font-size 0
    li
      box-sizing border-box
      width 25vw
      line-height 25vw
      display inline-block
      text-align center
      background-color #3a8ee6
      font-size 24px
      border-bottom  1px solid #82848a
      border-right  1px solid #82848a
    li:nth-of-type(4n), li:last-child
      background-color #e6a23c
    li:nth-last-of-type(3)
      width 50vw
</style>
