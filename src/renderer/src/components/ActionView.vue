<template>
  <div class="actions">
    <BaseAction class="action" img-name="actions/merge.svg" short-text="Merge PDF together">
      <MergeAction></MergeAction>
    </BaseAction>
  </div>
</template>

<script>
import MergeAction from "./actions/MergeAction.vue";
import BaseAction from "./actions/BaseAction.vue";

export default {
  name: "ActionView",
  components: {BaseAction, MergeAction},
  props: {},
  computed: {},
  methods: {}
}
</script>
<style lang="less" scoped>
.actions {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.action {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: white;
  height: 70px;
  max-width: 220px;
  flex: 1 0 21%; /* explanation below */
  margin: 5px;
  background-color: lightcyan;
  color: black;
  transition: box-shadow .3s;

}

.action:hover {
  box-shadow: 0 0 30px rgba(255, 255, 255, .9);
  cursor: pointer;
}
</style>
