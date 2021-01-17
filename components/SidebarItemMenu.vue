<template>
  <li class="nav-item">
    <a data-toggle="collapse" class="sidebar-menu-item nav-link active" aria-expanded="true">
      <i :class="link.icon"></i>
      <span class="nav-link-text">{{ link.name }}</span>
    </a>
    <div class="collapse show">
      <ul class="nav">
        <li class="nav-item"
          v-for="(subLink, index) in link.children"
          :key="subLink.name + index"
        >
          <a href="/dashboard" class="nav-link">
            <span class="nav-link-text">---- <i> sub: </i>{{ subLink.name }}</span>
          </a>
        </li>

      </ul>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    // menu: {
    //   type: Boolean,
    //   default: false,
    //   description:
    //     "Whether the item is a menu. Most of the item it's not used and should be used only if you want to override the default behavior.",
    // },
    opened: {
      type: Boolean,
      default: false
    },
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
