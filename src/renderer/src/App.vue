<template>
    <div id="app">
      <div class="content">
        <Header></Header>
        <Actions name="Hallo"></Actions>
      </div>
      <footer class="footer">This is a footer</footer>
    </div>
</template>

<script>
import Actions from './components/Actions.vue';
import Header from './components/Header.vue';
export default{
  name:"app",
  components: { Actions, Header }
}
</script>


<style lang="less">
@import './assets/css/styles.less';
html, body {
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1 0 auto;
}
.footer {
  flex-shrink: 0;
}
</style>
