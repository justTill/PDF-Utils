<template>
  <div class="header">
    <div class="headerImage">
      <img src="./assets/titleIcon.svg" width="100" height="100"/>
    </div>
    <div class="headerText">
      <span class="title">PDF-Utils</span>
      <span class="titleText">What do you want to do ?</span>
    </div>
    <actions></actions>
  </div>
</template>

<script>

</script>


<style lang="less">
@import './assets/css/styles.less';

.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  
}
.headerText {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  font-size: 30px;
}
</style>
