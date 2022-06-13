<template>
  <div>
    <el-tabs v-model="activeName"  @tab-click="handleClick" >
      <el-tab-pane label="全部" name="first" >全部</el-tab-pane>
      <el-tab-pane label="华语" name="second">流行</el-tab-pane>
      <el-tab-pane label="欧美" name="third">摇滚</el-tab-pane>
      <el-tab-pane label="韩国" name="fourth">民谣</el-tab-pane>
      <el-tab-pane label="日本" name="fifth">电子</el-tab-pane>
      <el-tab-pane label="小语种" name="seventh">轻音乐</el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
export default {
  name: 'pageOne',
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped >
.el-tabs /deep/ .el-tabs__nav-wrap::after{
  position: static!important;
}
.el-tabs /deep/ .el-tabs__active-bar{
  background-color: transparent!important;
}
</style>
