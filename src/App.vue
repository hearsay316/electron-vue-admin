<template>
  <!--模板-->
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>
<style lang="stylus">
body,html,#app{
  margin: 0
  padding 0
  height 100%
  width 100%
  overflow hidden
  user-select:none
}
</style>
