<template>
  <div>
    <MergeAction v-if="activeAction===ACTIONS.MERGE"></MergeAction>
  </div>
</template>
<script>

import MergeAction from "./actions/MergeAction.vue";
import {ACTIONS} from "../utils/Actions";

export default {
  name: "ActionView",
  components: {MergeAction},
  data() {
    return {
      ACTIONS,
    }
  },
  props: {
    activeAction: String
  }
}
</script>
<style lang="less" scoped>

</style>
