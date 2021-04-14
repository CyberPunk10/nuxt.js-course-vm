<template>
  <div>
    <div>
      <h1 class="text-4xl font-semibold text-gray-800 m-2 mb-8">
        DoingITeasyChannel - Nuxt-series
      </h1>
      <nuxt-link
        to="create"
        class="bg-purple-700 rounded p-2 text-white font-semibold m-2"
      >
        Create Push_ups
      </nuxt-link>
      <div class="flex">
        <ul class="w-64 px-2 text-gray-600">
          <li
            v-for="Push_ups in severalPush_ups"
            :key="Push_ups.id"
          >
            <nuxt-link
              :to="Push_ups.id"
              class="hover:font-bold hover:text-gray-900 leading-loose"
            >
              {{ Push_ups.count }}
            </nuxt-link>
          </li>
        </ul>
        <div class="flex-grow bg-white min-h-full">
          <nuxt-child :key="$route.params.id"></nuxt-child>
        </div>
      </div>
    </div>
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
import gql from 'graphql-tag'

export default {
  mixins: [validationMixin],
  async asyncData({ app, redirect }) {
    const result = await app.apolloProvider.defaultClient.query({
      query: gql`
        query getSeveralPush_ups {
          severalPush_ups {
            id
            count
          }
        }
      `
    })

    // redirect('/' + result.data.severalPush_ups[0].id)
    return result.data
  },
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

