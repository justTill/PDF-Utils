<template>
  <div class="actions">
    <NavItem class="action" img-name="actions/merge.svg" short-text="Merge PDF together"></NavItem>
    <NavItem class="action" img-name="actions/merge.svg" short-text="Merge PDF together"></NavItem>
    <NavItem class="action" img-name="actions/merge.svg" short-text="Merge PDF together"></NavItem>
    <NavItem class="action" img-name="actions/merge.svg" short-text="Merge PDF together"></NavItem>
    <NavItem class="action" img-name="actions/merge.svg" short-text="Merge PDF together"></NavItem>
    <NavItem class="action" img-name="actions/merge.svg" short-text="Merge PDF together"></NavItem>
    <NavItem class="action" img-name="actions/merge.svg" short-text="Merge PDF together"></NavItem>
    <NavItem class="action" img-name="actions/merge.svg" short-text="Merge PDF together"></NavItem>
    <NavItem class="action" img-name="actions/merge.svg" short-text="Merge PDF together"></NavItem>
    <NavItem class="action" img-name="actions/merge.svg" short-text="Merge PDF together"></NavItem>
    <NavItem class="action" img-name="actions/merge.svg" short-text="Merge PDF together"></NavItem>
  </div>
</template>
<script>
import MergeAction from "./actions/MergeAction.vue";
import NavItem from "./NavItem.vue";

export default {
  name: "Navigation",
  components: {NavItem, MergeAction},
  data() {
    return {
      currentAction: null
    }
  },
  props: {},
  computed: {},
  methods: {}
}
</script>
<style lang="less" scoped>
.actions {
  display: flex;
  justify-content: center;
  gap: 5px;
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
