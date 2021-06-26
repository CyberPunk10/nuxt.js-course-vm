<template>
  <div class="wrap-test wrap-test-leadgid">
    <TheModalWindowLeadgid
      ref="modal"
      class="test-form-leadgid"
      @closeModalWindow="closeModal"
    >
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
      v-if="!showedModalWindow && !validationResult"
      class="text-primary text-btn text-on-dashboard"
      @click="showModal"
    >{{ titleFormLogin ? 'Log In' : 'Sign Up' }}</p>
    <p
      v-if="!showedModalWindow && validationResult"
      class="text-primary text-btn text-on-dashboard"
      @click="validationResult = !validationResult"
    >Валидация прошла успешно</p>

    <h2 v-if="!showedModalWindow">Тестовое задание на вакансию HTML-верстальщик</h2>

    <div
      class="text"
      v-if="!showedModalWindow"
    >
      <p>В этом задании нужно сверстать форму входа на сайт и внедрить ее в Nuxt.js.<br>
        Можно сначала сверстать, потом внедрить в Nuxt, либо сразу верстать внутри фреймворка.<br>
        В среднем на тестовое задание требуется 1-2 часа.<br><br>
        Задание:</p>

      <ul class="style-list">
        <li>1. Сверстать <a
            class="link-typical"
            href="https://www.figma.com/file/QquaqC4hcvuhyyVzD3NbcU/Log-In-Page?node-id=0%3A1"
          >макет</a></li>

        <li>2. Развернуть проект Nuxt.js и внедрить верстку</li>
        <li>2.1. Форма должна вызывать метод submit, где перед отправкой формы проверяются данные:</li>
        <ul>
          <li>- Логин: минимум 3 символа, максимум 15</li>
          <li>- Логин: допускаются только буквы (кириллица, латиница)</li>
          <li>- Пароль: минимум 6 символов, максимум 20</li>
        </ul>
        <li>2.2. При отправке формы, если все поля прошли валидацию, нужно вызвать метод api() (код метода ниже):
          <div class="max-width-for-pre">
            <pre>

    api() {
      return new Promise((resolve) => {
        setTimeout(resolve('success'), 3000);
      });
    },
            </pre>
          </div>
        </li>

        <li>2.3. Выделить инпут красным, если данные не соответствуют валидации, приведенной выше (вывод текста ошибок - по желанию)</li>
        <li>2.4. Крестик должен вызывать метод close</li>

        <li>3. Загрузить проект в gitlab/github и выслать ссылку на почту</li>
      </ul>
    </div>
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

  layout: 'layout-main-challenges',

  data() {
    return {
      titleFormLogin: true,
      formLogin: {
        login: '',
        password: '',
      },
      validationResult: '',
      showedModalWindow: false
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
  mounted() {
    this.initClientOnlyComp()
  },

  methods: {
    initClientOnlyComp(count = 10) {
      this.$nextTick(() => {
        if (this.$refs.modal) {
          this.showModal()
        } else if (count > 0) {
          this.initClientOnlyComp(count - 1)
        }
      })
    },
    showModal() {
      this.$refs.modal.show = true
      this.showedModalWindow = true
      this.$store.commit('modalWindow/showModal')
    },
    closeModal() {
      this.$refs.modal.show = false
      this.showedModalWindow = false
      this.$store.commit('modalWindow/closeModal')
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
.wrap-test-leadgid
  margin: 0 auto
  width: 100%

  .text.opacity
    opacity: 0

  .test-form-leadgid
    font-family: "Roboto", sans-serif
    text-align: center

  .card-form
    &__close-btn
      position: absolute
      top: 0
      left: 0
      width: rem-increase(4rem)
      height: rem-increase(4rem)
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
      padding-top: rem-increase(1.8rem)
      height: rem-increase(4.5rem)
      cursor: pointer
      color: $green-primary
      transition: $transitionDefaultHover
      &:hover
        color: darken($green-primary, 5%)

  h1.title
    font-size: 30px
    line-height: rem-increase(2.9rem)
    padding-left: 5px
    margin-bottom: rem-increase(1.7rem)
    font-family: "Roboto", sans-serif
    font-weight: 400
    @media screen and (max-width: $phoneWidth) // < 480px
      padding-left: 0
      padding-right: 5px

  .text-primary
    font-family: "Roboto", sans-serif
    color: $green-primary
  .text-btn
    cursor: pointer
  .text-primary.text-btn
    text-align: center

  .button.offset
    margin-top: rem-increase(1.5rem)
    margin-bottom: rem-increase(1rem)

  .max-width-for-pre
    max-width: calc(100vw - rem-increase(3rem))
    overflow-x: auto
    padding: 0

  .style-list > li
    margin: rem(10) 0

  .text-on-dashboard
    margin: rem-increase(1rem)
</style>
