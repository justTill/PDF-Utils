<template>
  <div class="baseAction">
    <img :src="imgName" alt="mergePdfs">
    <span>{{ shortText }}</span>
    <slot/>
  </div>
</template>

<script>

export default {
  name: "BaseAction",
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
