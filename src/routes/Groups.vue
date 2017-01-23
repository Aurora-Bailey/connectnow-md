<template>
  <div class="groups page">
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
}
</style>
