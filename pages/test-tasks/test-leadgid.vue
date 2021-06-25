<template>
  <div id="test-leadgid">
    <TheModalWindowLeadgid ref="modal">
      <div
        class="card-form__close-btn"
        @click="closeModal"
      ></div>
      <div
        class="card-form__sign-btn"
        @click="titleFormLogin = !titleFormLogin"
      >
        {{ titleFormLogin ? 'Sign Up' : 'Log In' }}
      </div>
      <h1 class="title">{{ titleFormLogin ? 'Log In' : 'Sign Up' }}</h1>
      <form @submit.prevent="checkForm">
        <AppInputLeadgid
          v-model.trim="formLogin.login"
          :class="{invalid: $v.formLogin.login.$error}"
          :inputData="{ title: 'Name' }"
          :v="$v.formLogin.login"
          autofocus
          placeholder="Name"
        />

        <AppInputLeadgid
          v-model.trim="formLogin.password"
          :class="{invalid: $v.formLogin.password.$error}"
          :inputData="{ title: 'Password' }"
          :v="$v.formLogin.password"
          type="password"
          placeholder="Password"
        />

        <AppButtonLeadgid class="offset">{{ titleFormLogin ? 'Log In' : 'Sign Up' }}</AppButtonLeadgid>
      </form>
      <p
        v-if="titleFormLogin"
        class="text-primary text-btn"
      >Forgot your password?</p>
    </TheModalWindowLeadgid>
    <p
      v-if="!validationResult"
      class="text-primary text-btn"
      @click="showModal"
    >{{ titleFormLogin ? 'Log In' : 'Sign Up' }}</p>
    <p
      v-else
      class="text-primary text-btn"
      @click="validationResult = !validationResult"
    >Валидация прошла успешно</p>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, helpers } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  head: {
    title: `test-leadgid | ${process.env.appName}`,
    link: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
      { href: "https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap", rel: "stylesheet" },
    ]
  },

  layout: 'empty-center_html-fz-16px',

  data() {
    return {
      titleFormLogin: true,
      formLogin: {
        login: '',
        password: '',
      },
      validationResult: ''
    }
  },

  validations: {
    formLogin: {
      login: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(15),
        helpers: helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/),
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20)
      }
    }
  },

  beforeMount() {
    document.documentElement.style.fontSize = '16px'
  },
  mounted() {
    this.initClientOnlyComp()
  },

  beforeDestroy() {
    document.documentElement.style.fontSize = '10px'
  },

  methods: {
    initClientOnlyComp(count = 10) {
      this.$nextTick(() => {
        if (this.$refs.modal) {
          this.$refs.modal.show = true
        } else if (count > 0) {
          this.initClientOnlyComp(count - 1)
        }
      })
    },
    showModal() {
      this.$refs.modal.show = true
    },
    closeModal() {
      this.$refs.modal.show = false
    },
    checkForm() {
      if (this.$v.formLogin.$invalid) {
        this.$v.$touch()
        return
      }
      if (!this.$v.formLogin.$error) {
        const formData = {
          login: this.formLogin.login,
          password: this.formLogin.password
        }

        this.api()

        this.validationResult = true
        this.closeModal()
      }
    },

    api() {
      return new Promise((resolve) => {
        setTimeout(resolve('success'), 3000)
      })
    },
  }
}
</script>

<style lang="sass">
html body #test-leadgid
  background-color: #e5e5e5
  font-family: "Roboto", sans-serif
  margin: 0 auto
  min-height: 100vh
  width: 100%
  display: flex
  justify-content: center
  align-items: center
  text-align: center

  .card-form
    &__close-btn
      position: absolute
      top: 0
      left: 0
      width: 4rem
      height: 4rem
      cursor: pointer
      &:before,
      &:after
        content: ''
        width: 16px
        height: 2px
        background: $gray-03
        border-radius: 20px
        position: absolute
        left: 19px
        top: 36px
      &:before
        transform: rotate(45deg)
      &:after
        transform: rotate(-45deg)
      &:hover
        &:before,
        &:after
          background-color: darken($gray-03, 5%)

    &__sign-btn
      position: absolute
      top: -2px
      right: 15px
      padding-top: 1.8rem
      height: 4.5rem
      cursor: pointer
      color: $green-primary
      transition: $transitionDefaultHover
      &:hover
        color: darken($green-primary, 5%)

  h1.title
    font-size: 30px
    line-height: 2.9rem
    padding-left: 5px
    margin-bottom: 1.7rem
    font-family: "Roboto", sans-serif
    font-weight: 400

  .text-primary
    color: $green-primary
  .text-btn
    cursor: pointer

  .button.offset
    margin-top: 1.5rem
    margin-bottom: 1rem
</style>
