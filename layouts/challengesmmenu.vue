<template>
  <div style="position: relative" class="bg height-100vh">

    <!-- mm-wrapper -->
    <div class="mm-wrapper">

      <!-- nav -->
      <nav id="menu" class="mm-menu mm-menu_offcanvas" aria-hidden="true">
        <div class="mm-panels">

          <div id="mm-0" class="mm-panel mm-panel_opened">
            <div class="mm-navbar mm-navbar_sticky">
              <a class="mm-navbar__title"><span>Menu</span></a>
            </div>

            <ul class="mm-listview">
              <li class="mm-listitem"><a href="#" class="mm-listitem__text">Home</a></li>
              <li class="mm-listitem"><a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-1">About us<span class="mm-sronly">Open submenu</span></a></li>
              <li class="mm-listitem"><a href="#contact" class="mm-listitem__text">Contact</a></li>

              <li class="mm-divider">Other demos</li>
              <li class="mm-listitem"><a href="advanced.html" class="mm-listitem__text">Advanced demo</a></li>
              <li class="mm-listitem"><a href="onepage.html" class="mm-listitem__text">One page demo</a></li>

            </ul>
          </div>

          <div id="mm-1" class="mm-panel mm-hidden" aria-hidden="true">
            <div class="mm-navbar mm-navbar_sticky">
              <a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-0" aria-haspopup="true" aria-owns="mm-0"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-0" aria-hidden="true"><span>About us</span></a>
            </div>

            <ul class="mm-listview">
              <li class="mm-listitem"><a href="#about/history" class="mm-listitem__text">History</a></li>
              <li class="mm-listitem"><a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-2">The team<span class="mm-sronly">Open submenu</span></a></li>
              <li class="mm-listitem"><a href="#about/address" class="mm-listitem__text">Our address</a></li>
            </ul>
          </div>

          <div id="mm-2" class="mm-panel mm-hidden" aria-hidden="true">
            <div class="mm-navbar mm-navbar_sticky">
              <a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-1" aria-haspopup="true" aria-owns="mm-1"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-1" aria-hidden="true"><span>The team</span></a>
            </div>

            <ul class="mm-listview">
              <li class="mm-listitem"><a href="#about/team/management" class="mm-listitem__text">Management</a></li>
              <li class="mm-listitem"><a href="#about/team/sales" class="mm-listitem__text">Sales</a></li>
              <li class="mm-listitem"><a href="#about/team/development" class="mm-listitem__text">Development</a></li>
            </ul>
          </div>

        </div>
      </nav>

      <!-- page -->
      <div id="page" class="mm-page mm-slideout">
        <div class="header">
          <a href="#menu"><span></span></a>
            Demo
        </div>
        <div class="content">
          <div class="container">
            <Nuxt class="layout-scrollbar layout-cell height-100vh-minus-header" />
          </div>
          <p>
            <strong>This is a demo.</strong><br>
            Click the menu icon to open the menu.
          </p>
        </div>
      </div>

    </div>


    <TeleportMenu/>
  </div>
</template>

<script>
export default {
  // mounted(){
  //   /* Работа со скоролом */
  //   // взято отсюда: https://habr.com/ru/company/ruvds/blog/468405/
  //   // легкий простой код на проверку фиксированные ли scroll-ы у пользователя или нет
  //   // Scrollbar Width Test
  //   // Adds `layout-scrollbar-obtrusive` class to body if scrollbars use up screen real estate

  //   function getScrollbar () {

  //     var parent = document.createElement("div");
  //     parent.setAttribute("style", "width:30px; height:30px;");
  //     parent.classList.add('scrollbar-test');

  //     var child = document.createElement("div");
  //     child.setAttribute("style", "width:100%; height:40px");
  //     parent.appendChild(child);
  //     document.body.appendChild(parent);

  //     // Measure the child element, if it is not
  //     // 30px wide the scrollbars are obtrusive.
  //     var scrollbarWidth = 30 - parent.firstChild.clientWidth;
  //     if(scrollbarWidth) {
  //       document.body.classList.add("layout-scrollbar-obtrusive");
  //     }
  //     document.body.removeChild(parent);
  //   }

  //   getScrollbar()
  // },

  data() {
    return {

    }
  },
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(value) {
      this.$message.error(value.response.data.message)
    }
  }
}
</script>

<style>
/* Variables */
:root {
  --scrollbar-size: 8px;
  --scrollbar-minlength: 15px; /* Minimum length of scrollbar thumb (width of horizontal, height of vertical) */
  --scrollbar-ff-width: thin; /* FF-only accepts auto, thin, none */
  --scrollbar-track-color: transparent;
  --scrollbar-color: rgb(42, 36, 36,.3);
  --scrollbar-color-hover: rgba(41, 35, 35, 0.55);
  --scrollbar-color-active: rgb(42, 36, 36,.8);
}
</style>

<style lang="sass">
//	Animations
.mm-page
  box-sizing: border-box
  position: relative

.mm-slideout
  transition: transform $mm_transitionDuration $mm_transitionFunction
  z-index: 1

//	Wrapper
.mm-wrapper
  &_opened
    overflow-x: hidden
    position: relative
    .mm-page
      min-height: 100vh

  &_background
    .mm-page
      background: inherit

//	Menu
.mm-menu_offcanvas
  position: fixed
  right: auto
  z-index: 0
  &:not(.mm-menu_opened)
    display: none

@include mm_offcanvas_size

@if ($mm_include_offcanvas_blocker)
  .mm-wrapper__blocker
    background: rgba(3, 2, 1, 0)
    overflow: hidden
    display: none
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 2

  .mm-wrapper_blocking
    overflow: hidden
    body
      overflow: hidden

    .mm-wrapper__blocker
      display: block



// @import 'offcanvas.rtl'

// .mm
//   &-wrapper
//     &__blocker
//       background: rgba(3, 2, 1, 0)
//       overflow: hidden
//       // display: none
//       position: fixed
//       top: 0
//       right: 0
//       bottom: 0
//       left: 0
//       z-index: 2

//     &_blocking
//       overflow: hidden

//     //   body
//     //     overflow: hidden

//     // &__blocker
//     //   display: block

//     &_opened
//       overflow-x: hidden
//       position: relative

//   &-menu
//     &_offcanvas
//       position: fixed
//       right: auto
//       z-index: 0

//       // &:not(.mm-menu_opened)
//       //   display: none

//   // &-panels

//   // &-panel
//   //   &_opened

//   // &-listview
//   //   li

//   &-page
//     box-sizing: border-box
//     position: relative
//     min-height: 100vh

//   &-slideout
//     transition: transform $mm_transitionDuration $mm_transitionFunction
//     z-index: 1



// $height-header: 5.1rem

// // .bg
//   // @include backgroundShorthandWithExternalVar('challenges/kaspar-allenbach-w9QgdJ3lAPU-unsplash.jpg', center)
//   // background-color: $theme-color-yellow
// .height-100vh
//   height: 100vh
// .height-100vh-minus-header
//   height: calc(100vh - #{$height-header})

// .container
//   // padding-top: calc(#{$height-header} + 3rem)
//   padding-top:$height-header
// // .menu
// //   position: fixed
// //   z-index: 9999
// //   top: 0
// //   left: 0
// //   right: 0
// //   height: $height-header
// //   background-color: #fff
// //   border-bottom: 1px solid #e6e6e6
// //   display: flex
// //   justify-content: center
// //   align-items: center
// //   @media screen and (max-width: $tableWidth)
// //     font-size: 6px
// //   a
// //     color: #909399
// //     height: $height-header
// //     line-height: $height-header
// //     padding: 0 1.5rem
// //     &:hover
// //       border-bottom: 2px solid #409EFF


</style>
