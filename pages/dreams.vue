<template>
  <form class="form-dreams" @submit.prevent="onSubmit">
    <h3 class="title">Чего ты хочешь?</h3>
    <TextArea v-bind:TextArea="TextAreaEmail" @func="setValue"/>
    <Button v-bind:button="button" class="btn-opacity"/>
  </form>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
export default {
  layout: 'emptyCenter',
  head: { title: 'Dreams' },

  data () {
    return {
      TextAreaEmail: {
        title: '',
        autofocus: true,
        placeholder: 'напиши',
        invalid: { emptyField: false, incorrect: false },
      },
      button: { type: 'submit', text: 'Save' },
      valueEmail: '',
    }
  },

  validations: {
    valueEmail: { email, required },
    valuePassword: { required, minLength: minLength(4) }
  },

  methods: {
    setValue (value, type) {
      if (type === 'Email') {
        this.valueEmail = value
        this.TextAreaEmail.value = value
      }
      this.handlerInputs()
    },
    handlerInputs () {
      this.TextAreaEmail.invalid.emptyField = (this.$v.valueEmail.$dirty && !this.$v.valueEmail.required)
      this.TextAreaEmail.invalid.incorrect = (this.$v.valueEmail.$dirty && !this.$v.valueEmail.email)
    },
    async onSubmit () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        this.handlerInputs()
        return
      }

      const formData = {
        email: this.valueEmail,
      }
      function storage (key, data = null) {
        if (!data) {
          return JSON.parse(localStorage.getItem(key))
        }
        localStorage.setItem(key, JSON.stringify(data))
      }
      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/about')
        storage('data-storage', formData)
      } catch (error) {
        if (error.code === 'auth/user-not-found') {
          this.TextAreaEmail.invalid.incorrect = true
        }
      }
    }
  }
}
</script>

<style lang="sass">
  .form-dreams
    display: flex
    justify-content: center
    flex-direction: column
    padding-bottom: 21vh
    font-family: Quicksand,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"
    h3
      text-align: center
      font-family: "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif
      // font-size: 32px
      // font-weight: 700
      line-height: 47px
    .btn-opacity
      cursor: pointer
      opacity: 0.1
</style>
