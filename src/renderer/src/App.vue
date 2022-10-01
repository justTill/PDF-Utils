<template>
    <div id="app">
      <div class="content">
        <Header></Header>
        <ActionView></ActionView>
      </div>
      <footer class="footer">This is a footer</footer>
    </div>
</template>

<script>
import ActionView from './components/ActionView.vue';
import Header from './components/Header.vue';

export default{
  name:"app",
  components: {ActionView, Header}
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
