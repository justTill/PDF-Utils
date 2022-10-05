<template>
    <div id="app">
      <Header class="header"></Header>
      <div class="content">
        <div class="navigationContainer">
          <Navigation :navigate-to-action="navigateToAction" class="navigation"></Navigation>
        </div>
        <div class="main">
          <ActionView :active-action="currentAction"></ActionView>
          <Footer class="footer"></Footer>
        </div>
      </div>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
import ActionView from "./components/ActionView.vue";
import {ACTIONS} from "./utils/Actions.js"

export default {
  name: "app",
  components: {ActionView, Footer, Navigation, Header},
  data() {
    return {
      ACTIONS,
      currentAction: ACTIONS.NONE
    }
  },
  methods: {
    navigateToAction: function (action) {
      this.currentAction = action
    }
  }
}
</script>


<style lang="less">
@import './assets/css/styles.less';

html, body {
  height: 100%;
}

#app {
  overflow-y: hidden;
  margin: 0;
}

.header {
  background-color: beige;
  height: 100px;
  color: black;
}

.content {
  display: flex;
  justify-content: left;
  flex-direction: row;
  overflow-y: hidden;
}

.navigationContainer {
  overflow-y: scroll;
  padding: 10px;
  background-color: darkblue;
  height: 100vh;
}

.navigation {
  display: flex;
  flex-direction: column;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.footer {
  margin-top: auto;
  height: 30px;
  border: white 1px solid;
}
</style>
