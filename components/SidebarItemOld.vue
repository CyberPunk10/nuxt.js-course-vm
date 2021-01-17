<template>

  <!-- <sidebar-item
    opened
    :link="{
      name: 'Dashboard',
      icon: 'ni ni-shop text-primary',
      path: '/dashboard'
    }"
  > -->

  <!-- <component
    :is="baseComponent"
    :to="link.path ? link.path : '/'"
    class="nav-item"
    :class="{ active: isActive }"
    tag="li"
  >
    <a
      v-if="isMenu"
      class="sidebar-menu-item nav-link"
      :class="{ active: isActive }"
      :aria-expanded="!collapsed"
      data-toggle="collapse"
      @click.prevent="collapseMenu"
    >-->
      <!-- <template v-if="addLink">
        <span class="nav-link-text">
          {{ link.name }}
        </span>
      </template>
      <template v-else>
        <i :class="link.icon"></i>
        <span class="nav-link-text">{{ link.name }}</span>
      </template> -->
    <!-- </a> -->

      <SidebarItemMenu
        v-if="link.children"
        :link="link"
      />
      <SidebarItemRoute
        v-else
        :link="link"
      />

    <!-- <collapse-transition>
      <div v-show="!collapsed" class="collapse show">
        <ul class="nav nav-sm flex-column">
          <slot></slot>
        </ul>
      </div>
    </collapse-transition> -->

    <!-- <slot
      name="title"
      v-if="children.length === 0 && !$slots.default && link.path"
    >
      <component
        :to="link.path"
        @click.native="linkClick"
        :is="elementType(link, false)"
        class="nav-link"
        :class="{ active: link.active }"
        :target="link.target"
        :href="link.path"
      >
        <template v-if="addLink">
          <span class="sidebar-mini">{{ linkPrefix }}</span>
          <span class="nav-link-text">{{ link.name }}</span>
        </template>
        <template v-else>
          <i :class="link.icon"></i>
          <span class="nav-link-text">{{ link.name }}</span>
        </template>
      </component>
    </slot> -->
  <!-- </component> -->
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
    isActive() {
      if (this.$route && this.$route.path) {
        let matchingRoute = this.children.find((c) =>
          this.$route.path.startsWith(c.link.path)
        );
        if (matchingRoute !== undefined) {
          return true;
        }
      }
      return false;
    },
    // collapseMenu() {
    //   this.collapsed = !this.collapsed;
    // },
  }
}
</script>

<style lang="sass">

</style>
