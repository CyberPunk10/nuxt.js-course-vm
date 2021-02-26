<template>
  <div class="content-center">
    <FormLoginRegister :formLoginRegister="formLoginRegister" @onSubmit="checkForm">
      <AppInputChallenge
        v-model.trim="formRegister.login"
        class="label_bold"
        :class="{invalid: $v.formRegister.login.$error}"
        :inputData="inputLoginData"
        :v="$v.formRegister.login"
        autofocus
        required
        placeholder="Имя или никнейм"
      >{{inputLoginData.title}}:</AppInputChallenge>

      <AppInputChallenge
        v-model.trim="formRegister.email"
        class="label_bold"
        :class="{invalid: $v.formRegister.email.$error}"
        :inputData="inputEmailData"
        :v="$v.formRegister.email"
        type="email"
        placeholder="email"
      >{{inputEmailData.title}}:</AppInputChallenge>

      <AppInputChallenge
        v-model.trim="formRegister.password"
        class="label_bold"
        :class="{invalid: $v.formRegister.password.$error}"
        :inputData="inputPasswordData"
        :v="$v.formRegister.password"
        type="password"
        placeholder="пароль"
      >{{inputPasswordData.title}}:</AppInputChallenge>

      <ButtonChallenge type="submit">Зарегистрироваться</ButtonChallenge>

      <p class="agree">Нажимая кнопку «Зарегистрироваться», вы принимаете пользовательское соглашение и политику конфиденциальности.</p>

      <template #afterCardContent>
        <p>Уже есть аккаунт?
          <NuxtLink to="/challenges/login">Войти</NuxtLink>
        </p>
      </template>

    </FormLoginRegister>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { email, required, minLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  head: {
    title: `Создать пользователя | ${process.env.appName}`
  },
  layout: 'layout-main-challenges',

  data() {
    return {
      loading: false,

      formLoginRegister: {
        title: 'Регистрация аккаунта'
      },

      inputLoginData: {
        title: 'Имя или никнейм',
        required: true
      },
      inputEmailData: {
        title: 'Email',
        required: true
      },
      inputPasswordData: {
        title: 'Пароль',
        required: true
      },

      formRegister: {
        login: '',
        email: '',
        password: ''
      },
    }
  },

  validations: {
    formRegister: {
      login: { required, minLength: minLength(6) },
      email: { required, email },
      password: {
        // simpleValidation(value) {
        //   console.log(value)
        //   return value.length > 5
        // }
        required, minLength: minLength(8)
      }
    }
  },
  methods: {
    async checkForm() {
      if (this.$v.formRegister.$invalid) {
        this.$v.$touch()
        return
      }
      if (!this.$v.formRegister.$error) {
        console.log('Валидация прошла успешно')
        this.loading = true

        const formData = {
          login: this.formRegister.login,
          email: this.formRegister.email,
          password: this.formRegister.password
        }

        try {
          // create new user
          await this.$store.dispatch('auth/createUserFree', formData)
          // this.$message.success('Новый пользователь добавлен')
          this.formRegister.login = this.formRegister.email = this.formRegister.password = ''

          // сразу заходим под созданным new user
          await this.$store.dispatch('auth/login', formData)
          this.$router.push('/challenges/my-profile')
          this.$message.success(`Добро пожаловать, ${formData.login}`)
        } catch (error) {
          console.log(error)
        } finally {
          this.loading = false
        }
      }
    }
  }
}
</script>

<style lang="sass">
p.agree
  font-size: 1.4rem
  padding-top: 1.5rem
  // text-align: left
</style>
