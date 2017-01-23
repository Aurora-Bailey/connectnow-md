<template>
  <div class="groups">
    <div v-for="i in 100">
      Line of text {{i}}
    </div>
    Groups
  </div>
</template>
<script>
export default {
  name: 'groups'
}
</script>

<style lang="scss" scoped>
.groups {
  color: purple;
  overflow: auto;
}
</style>
