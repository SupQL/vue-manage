<template>
  <div class="home">
    <el-container style="height: 100%">
      <el-aside width="auto">
        <common-aside/>
      </el-aside>
      <el-container>
        <el-header>
         <common-header/>
        </el-header>
        <common-tag/>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from '@/components/CommonAside'
import CommonHeader from '@/components/CommonHeader'
import CommonTag from '@/components/CommonTag'
export default {
  name: 'MainView',
  components: {
    CommonAside,
    CommonHeader,
    CommonTag
  }
}
</script>

<style lang="less" scoped>
.el-header{
  //background-color: #333333;
  background-color: pink;
}
.el-main{
  padding: 0;
}
</style>
