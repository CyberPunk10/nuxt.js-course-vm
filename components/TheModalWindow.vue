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
        <!-- <div class="modal-close" @click="closeModal">&#10006;</div> -->
        <div
          class="modal-close"
          @click="closeModal"
        ></div>
        <slot name="title">
          <h3 class="modal-title">Заголовок</h3>
        </slot>
        <slot name="body">
          <div class="modal-content">Дефолтный контент модального окна</div>
        </slot>
        <slot name="footer">
          <div class="modal-footer">
            <button
              class="modal-footer__button"
              @click="closeModal"
            >Ок</button>
          </div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalWindow",
  props: ['className'],

  data: function () {
    return {
      show: false
    }
  },
  methods: {
    closeModal: function () {
      this.show = false
    }
  }
}
</script>

<style scoped lang="sass">
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
  background: rgba(0, 0, 0, 0.39)

  .modal
    background: #fff
    border-radius: 8px
    padding: 15px
    min-width: 420px
    max-width: 480px
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    &.xl-width
      max-width: 950px
      width: 100%

    &-close
      position: absolute
      top: 15px
      right: 15px
      width: 22px
      height: 22px
      cursor: pointer
      &:before,
      &:after
        content: ''
        width: 24px
        height: 1px
        background: #555
        position: absolute
        left: -1px
        top: 10px
      &:before
        transform: rotate(45deg)
      &:after
        transform: rotate(-45deg)

    &-title
      color: #0971c7

    &-content
      margin-bottom: 20px

    &-footer
      &__button
        background-color: #0971c7
        color: #fff
        border: none
        text-align: center
        padding: 8px
        font-size: 17px
        font-weight: 500
        border-radius: 8px
        min-width: 150px
</style>
