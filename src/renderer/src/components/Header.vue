<template>
    <div class="header">
    <div class="headerImage">
        <img src="../assets/titleIcon.svg" width="100" height="100"/>
    </div>
    <div class="headerText">
        <span class="title">PDF-Utils</span>
        <span class="titleText">What do you want to do ?</span>
    </div>
    </div>
</template>
<script>
export default {
    name:"Header",
}
</script>
<style lang="less" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 10px;

}
.headerText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
}
.title {
  font-size: 30px;
}

</style>
