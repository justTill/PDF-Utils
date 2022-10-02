<template>
  <div class="baseAction">
    <img :src="imgName" alt="mergePdfs">
    <span>{{ shortText }}</span>
  </div>
</template>

<script>

export default {
  name: "NavItem",
  components: {},
  props: {
    imgName: String,
    shortText: String
  },
  computed: {},
  methods: {}
}
</script>
<style lang="less" scoped>

</style>
