<template>

  <li v-if="link.children"
    class="nav-item"
  >
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
          <NuxtLink class="nav-link" :to="subLink.url">
            <span class="nav-link-text">---- <i> sub: </i>{{ subLink.name }}</span>
          </NuxtLink>
        </li>

      </ul>
    </div>
  </li>

  <NuxtLink v-else
    class="nav-link"
    :to="link.url"
  >
    <i :class="link.icon"></i>
    <span class="nav-link-text">{{ link.name }}</span>
  </NuxtLink>

</template>

<script>
export default {
  props: {
    // opened: {
    //   type: Boolean,
    //   default: false
    // },
    link: {
      type: Object,
      default: () => {
        return {
          name: "",
          path: "",
          // children: [],
        };
      }
    },
  },

  computed: {
    // baseComponent() {
    //   return this.isMenu || this.link.isRoute ? "li" : "router-link";
    // },
    // isMenu() {
    //   if (!this.$slots.default) {
    //     return false;
    //   }
    //   return this.$slots.default.some((item) =>
    //     item.tag.endsWith("SidebarItem")
    //   );
    // },
  },
  methods: {
    // elementType(link, isParent = true) {
    //   if (link.isRoute === false) {
    //     return isParent ? "li" : "a";
    //   } else {
    //     return "router-link";
    //   }
    // },
    // isActive() {
    //   if (this.$route && this.$route.path) {
    //     let matchingRoute = this.children.find((c) =>
    //       this.$route.path.startsWith(c.link.path)
    //     );
    //     if (matchingRoute !== undefined) {
    //       return true;
    //     }
    //   }
    //   return false;
    // },
    // collapseMenu() {
    //   this.collapsed = !this.collapsed;
    // },
  }
}
</script>

<style lang="sass">
.sidebar
  .nav-item
    .nav-link-text
      @media screen and (min-width: $tableWidth)
        display: none
    .collapse
      @media screen and (min-width: $tableWidth)
        display: none

.sidebar.active
  .nav-item
    .nav-link-text
      @media screen and (min-width: $tableWidth)
        display: block
    .collapse
      @media screen and (min-width: $tableWidth)
        display: block



</style>
