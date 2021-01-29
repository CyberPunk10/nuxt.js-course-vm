<template>
  <component class="sidenav__nav-item"
    :is="!link.children ? 'NuxtLink' : 'div'" :to="!link.children ? link.url : false"
  >
    <i v-if="!link.children && link.icon" :class="link.icon"></i>

    <NuxtLink v-else-if="link.icon" :to="link.url">
      <i :class="link.icon"></i>
    </NuxtLink>

    <span v-if="!link.children" class="sidenav__nav-item-text">{{ link.name }}</span>

    <div v-else class="sidenav__nav-item-menu"
      @click="toggleMenu"
    >
      <div class="sidenav__nav-item-menu-title"
        data-toggle="collapse"
        aria-expanded="true"
      >
        <span class="sidenav__nav-item-text">{{ link.name }}</span>
        <i class="fas fa-angle-right"></i>
      </div>
      <!-- <div v-if="link.children.length > 11" class="message-for-developer">
        <p style="font-size:10px; color: red; whiteSpace: normal;">В стилях надо добавить класс .subitem-count-X, где X - это количество subitems</p>
      </div> -->
      <div class="sidenav__nav-item-menu-list"
        :class="`subitem-count-${link.children.length}`"
      >
        <slot></slot>
      </div>
    </div>
  </component>
</template>

<script>
export default {
  props: {
    link: {
      type: Object
    }
  },

  methods: {
    toggleMenu(event) {
      console.log(event.target)
      event.target.closest('.sidenav__nav-item')
        .classList.toggle('collapsed')
    }
  }
}
</script>

<style lang="sass">
.sidebar
  // vars
  $heightSubItem: 3.5rem
  $borderRadius: 6px

  // sidenav
  .sidenav
    &__nav-item
      display: grid
      grid: minmax($sidebar-heightItem, max-content ) / calc(#{$sidebarWidthIcon} - 2 * #{$sidebar-marginItem}) minmax(auto, calc(100% - #{$sidebar-heightItem})) // row/col
      margin: 0 $sidebar-marginItem
      width: calc(100% - 2 * #{$sidebar-marginItem})
      overflow: hidden
      border-radius: $borderRadius
      margin-bottom: 2px
      transition: $transitionDefault
      &:hover
        background-color: rgb(237, 245, 253)
        // background-color: rgba(94, 114, 228, 0.1)

      &>i,
      &>a
        text-align: center
        font-size: 1.6rem
        line-height: $sidebar-heightItem
        height: $sidebar-heightItem
        // color: $color-text-grey
        color: $neutral-secondary
        border-radius: $borderRadius

      &-text
        line-height: $sidebar-heightItem
        color: rgba(0,0,0,.6)
        transition: $transitionDefault
        &:hover
          color: rgba(0,0,0,.7)

      // .sidenav__nav-item-menu
      &-menu
        &-title
          display: flex
          justify-content: space-between
          align-items: center
          cursor: pointer
          i
            padding: 0 1rem
            line-height: $sidebar-heightItem
            transform: rotate(90deg)
            color: $color-purple
            transition: $transitionDefault
          span
            display: inline-block
            width: calc(100% - 3rem)
            min-width: 15rem // при сворачивании sideber выглядит красивее
            overflow: hidden
        &-list
          height: 0
          transition: $transitionDefault
          .sidenav__nav-item
            display: block
            margin-left: 0
            margin: 0
            padding: 0 $sidebar-marginItem
            width: calc(100% - #{$sidebar-marginItem} * 4)
            span
              line-height: $heightSubItem
              font-size: .93em
              color: rgba(0,0,0,.6)
              opacity: 0
              transition: opacity .4s ease .1s

    .nuxt-link-exact-active
      // background-color: rgba(155, 233, 168, 0.4)
      i, span
        color: #30a14e
        color: #8c4fe8
        // color: #FF0000

  &.active
    .sidenav__nav-item-menu-list
      span
        opacity: 1

    .sidenav__nav-item-menu-list.subitem-count-1
      height: $heightSubItem
    .sidenav__nav-item-menu-list.subitem-count-2
      height: calc(#{$heightSubItem} * 2)
    .sidenav__nav-item-menu-list.subitem-count-3
      height: calc(#{$heightSubItem} * 3)
    .sidenav__nav-item-menu-list.subitem-count-4
      height: calc(#{$heightSubItem} * 4)
    .sidenav__nav-item-menu-list.subitem-count-5
      height: calc(#{$heightSubItem} * 5)
    .sidenav__nav-item-menu-list.subitem-count-6
      height: calc(#{$heightSubItem} * 6)
    .sidenav__nav-item-menu-list.subitem-count-7
      height: calc(#{$heightSubItem} * 7)
    .sidenav__nav-item-menu-list.subitem-count-8
      height: calc(#{$heightSubItem} * 8)
    .sidenav__nav-item-menu-list.subitem-count-9
      height: calc(#{$heightSubItem} * 9)
    .sidenav__nav-item-menu-list.subitem-count-10
      height: calc(#{$heightSubItem} * 10)
    .sidenav__nav-item-menu-list.subitem-count-11
      height: calc(#{$heightSubItem} * 11)

    .sidenav__nav-item.collapsed
      .sidenav__nav-item-menu
        &-title
          i
            transform: rotate(0deg)
        &-list
          height: 0


    // .nav-link[data-toggle="collapse"]
    // &:after
    //   display: inline-block
    //   font-style: normal
    //   font-variant: normal
    //   text-rendering: auto
    //   -webkit-font-smoothing: antialiased
    //   font-family: 'Font Awesome 5 Free'
    //   font-weight: 900
    //   content: "\f105"
    //   margin-left: auto
    //   color: $color-purple
    //   // @include transition($transition-base)

    // // Expanded
    // &[aria-expanded="true"]
    //   &:after
    //     // color: theme-color("primary")
    //     transform: rotate(90deg)

</style>
