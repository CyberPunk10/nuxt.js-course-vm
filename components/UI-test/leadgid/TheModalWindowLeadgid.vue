<template>
  <transition name="modal">
    <div
      v-if="show"
      class="modal-shadow"
      @click.self="closeModal"
    >
      <div
        class="modal"
        :class="className"
      >
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalWindow",
  props: ['className'],

  data() {
    return {
      show: false
    }
  },
  methods: {
    closeModal: function () {
      this.show = false
      this.$emit('closeModalWindow')
    }
  }
}
</script>

<style lang="sass">
html body #test-leadgid

  .modal-enter-active, .modal-leave-active
    transition: opacity .2s
  .modal-enter, .modal-leave-to
    opacity: 0

  .modal-shadow
    z-index: 21
    position: fixed
    top: 0
    left: 0
    min-height: 100%
    width: 100%
    background-color: #e5e5e5

    .modal
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      width: 100%
      max-width: 375px
      padding: 1rem
      background-color: #fff
      @media screen and (max-width: $phoneWidth) // < 480px
        top: 0
        height: 100%
        transform: translate(-50%, 0)
</style>
