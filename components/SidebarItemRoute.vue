<template>
  <a class="sidebar-menu-item nav-link active">
    <i :class="link.icon"></i>
    <span class="nav-link-text">{{ link.name }}</span>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      default: () => {
        return {
          name: "",
          path: "",
          children: [],
          isMain: false,
        };
      },
      description:
        "Sidebar link. Can contain name, path, icon and other attributes.",
    },
  },
}
</script>

<style lang="sass">

</style>
