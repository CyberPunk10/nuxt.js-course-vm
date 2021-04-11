<template>
  <div>
    <FormLoginRegister
      :formLoginRegister="formLoginRegister"
      @onSubmit="checkForm"
    >
      <AppInputChallenge
        v-model.trim="formLogin.login"
        class="label_bold"
        :class="{invalid: $v.formLogin.login.$error}"
        :inputData="{ title: 'Логин или Email' }"
        :v="$v.formLogin.login"
        autofocus
        placeholder="Логин или Email"
      >Логин или Email:</AppInputChallenge>
      <!-- :class="{invalid: ($v.formLogin.login.$dirty && !$v.formLogin.login.required)}" -->

      <AppInputChallenge
        v-model.trim="formLogin.password"
        class="label_bold"
        :class="{invalid: $v.formLogin.password.$error}"
        :inputData="{ title: 'Пароль' }"
        :v="$v.formLogin.password"
        type="password"
        placeholder="Пароль"
      >Пароль:</AppInputChallenge>
      <!-- :class="{invalid: ($v.formLogin.password.$dirty && !$v.formLogin.password.required)}" -->

      <ButtonChallenge type="submit">Войти</ButtonChallenge>

      <template #afterCardContent>
        <p>Создать новый аккаунт?
          <NuxtLink to="/challenges/register-user">Регистрация</NuxtLink>
        </p>

        <div class="temp">
          <p>Войти под админом: </p>
          <p>
            <span>Login: 0000</span><br>
            <span>Email: 0000@0000.ru</span><br>
            <span>Пароль: Mountains</span>
          </p>
        </div>
      </template>
    </FormLoginRegister>
  </div>
</template>


<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  head: {
    title: `Вход на сайт | ${process.env.appName}`
  },
  layout: 'empty-center',

  data() {
    return {
      loading: false,

      formLoginRegister: { title: 'Войти' },

      formLogin: {
        login: '',
        password: '',
      },
    }
  },

  computed: {
    isDeveloper() {
      return this.$store.getters['authStore/isDeveloper']
    },
    isChallenges() {
      return this.$store.getters['authStore/isChallenges']
    },
    isMockupAdmin() {
      return this.$store.getters['authStore/isMockupAdmin']
    }
  },

  validations: {
    formLogin: {
      login: { required, minLength: minLength(4) },
      password: {
        // simpleValidation(value) {
        //   console.log(value)
        //   return value.length > 5
        // }
        required, minLength: minLength(6)
      }
    }
  },

  mounted() {
    const { message } = this.$route.query

    switch (message) {
      case 'login':
        this.$message.info('Для начала войдите в систему')
        break
      case 'logout':
        this.$message.success('Вы успешно вышли из системы')
        break
      case 'session':
        this.$message.warning('Время сессии истекло, пожалуйста зайдите заного')
        break
    }

  },

  methods: {
    async checkForm() {
      if (this.$v.formLogin.$invalid) {
        this.$v.$touch()
        return
      }
      if (!this.$v.formLogin.$error) {
        // console.log('Валидация прошла успешно')
        this.loading = true

        const formData = {
          loginOrEmail: this.formLogin.login,
          password: this.formLogin.password
        }

        try {
          await this.$store.dispatch('authStore/login', formData)
          if (this.isDeveloper || this.isChallenges) this.$router.push('/challenges/my-profile')
          if (this.isMockupAdmin) this.$router.push('/')

          this.$message.success(`Добро пожаловать, ${this.formLogin.login}`)
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

