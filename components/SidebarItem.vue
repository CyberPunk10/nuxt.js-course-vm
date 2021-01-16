<template>
<div class="test">
  <component
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
    >
      <template v-if="addLink">
        <span class="nav-link-text">
          {{ link.name }}
        </span>
      </template>
      <template v-else>
        <i :class="link.icon"></i>
        <span class="nav-link-text">{{ link.name }}</span>
      </template>
    </a>

    <collapse-transition>
      <div v-show="!collapsed" class="collapse show">
        <ul class="nav nav-sm flex-column">
          <slot></slot>
        </ul>
      </div>
    </collapse-transition>

    <slot
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
    </slot>
  </component>





  <li to="/" tag="li" class="nav-item"><a data-toggle="collapse" class="sidebar-menu-item nav-link" aria-expanded="true"><i class="ni ni-ui-04 text-info"></i> <span class="nav-link-text">Components </span></a>
    <div class="collapse show" style="animation-fill-mode: both; animation-timing-function: ease-out;" data-old-padding-top="" data-old-padding-bottom="" data-old-overflow="">
      <ul class="nav nav-sm flex-column">
        <li class="nav-item">
          <div class="collapse show" style="display:none">
            <ul class="nav nav-sm flex-column"></ul>
          </div> <a href="/components/buttons" class="nav-link"><span class="nav-link-text">Buttons</span></a>
        </li>
        <li class="nav-item">
          <div class="collapse show" style="display:none">
            <ul class="nav nav-sm flex-column"></ul>
          </div> <a href="/components/cards" class="nav-link"><span class="nav-link-text">Cards</span></a>
        </li>
        <li class="nav-item">
          <div class="collapse show" style="display:none">
            <ul class="nav nav-sm flex-column"></ul>
          </div> <a href="/components/grid-system" class="nav-link"><span class="nav-link-text">Grid</span></a>
        </li>
        <li class="nav-item">
          <div class="collapse show" style="display:none">
            <ul class="nav nav-sm flex-column"></ul>
          </div> <a href="/components/notifications" class="nav-link"><span class="nav-link-text">Notifications</span></a>
        </li>
        <li class="nav-item">
          <div class="collapse show" style="display:none">
            <ul class="nav nav-sm flex-column"></ul>
          </div> <a href="/components/icons" class="nav-link"><span class="nav-link-text">Icons</span></a>
        </li>
        <li class="nav-item">
          <div class="collapse show" style="display:none">
            <ul class="nav nav-sm flex-column"></ul>
          </div> <a href="/components/typography" class="nav-link"><span class="nav-link-text">Typography</span></a>
        </li>
        <li to="/" tag="li" class="nav-item">
          <a data-toggle="collapse" class="sidebar-menu-item nav-link">
            <span class="nav-link-text">Multi Level

            </span>
          </a>
          <div class="collapse show" style="display:none">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <div class="collapse show" style="display:none">
                  <ul class="nav nav-sm flex-column"></ul>
                </div> <a href="#" class="nav-link"><span class="nav-link-text">Third level menu</span></a>
              </li>
              <li class="nav-item">
                <div class="collapse show" style="display:none">
                  <ul class="nav nav-sm flex-column"></ul>
                </div> <a href="#" class="nav-link"><span class="nav-link-text">Just another link</span></a>
              </li>
              <li class="nav-item">
                <div class="collapse show" style="display:none">
                  <ul class="nav nav-sm flex-column"></ul>
                </div> <a href="#" class="nav-link"><span class="nav-link-text">One last link</span></a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </li>
</div>
</template>

<script>
export default {

}
</script>

<style lang="sass">

</style>
