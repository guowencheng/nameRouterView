<template>
  <div class="hello">
    <span>{{msg}}！我是头部</span>
    <router-view name="headerDetail"></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎'
    }
  }
}
</script>

<style scoped>

</style>
