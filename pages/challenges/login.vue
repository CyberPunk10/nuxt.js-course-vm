<template>
  <div>
    <CardLoginRegister :CardLoginRegister="CardLoginRegister" @onSubmit="onSubmit">
      <AppInputChallenge v-model.trim="controls.login" class="label_bold">Логин или Email: </AppInputChallenge>
      <AppInputChallenge v-model.trim="controls.password" type="password" class="label_bold">Пароль: </AppInputChallenge>
      <ButtonChallenge type="submit">Войти</ButtonChallenge>

      <template #afterCardContent>
        <p>Создать новый аккаунт?
          <NuxtLink to="/challenges/register-user">Регистрация</NuxtLink>
        </p>
      </template>
    </CardLoginRegister>
  </div>
</template>


<script>
import { email, required, minLength } from 'vuelidate/lib/validators'

export default {
  head: {
    title: `Вход на сайт | ${process.env.appName}`
  },
  layout: 'emptyCenter',
  data() {
    return {
      loading: false,
      CardLoginRegister: {
        title: 'Войти'
      },
      // TextAreaEmail: {
      //   title: '',
      //   autofocus: true,
      //   placeholder: 'напиши',
      //   invalid: { emptyField: false, incorrect: false },
      // },
      // button: { type: 'submit', text: 'Save' },
      // valueEmail: '',
      controls: {
        login: '',
        password: ''
      },
      // rules: {
      //   login: [
      //     {required: true, message: 'Введите логин', trigger: 'blur'}
      //   ],
      //   password: [
      //     {required: true, message: 'Введите пароль', trigger: 'blur'},
      //     {min: 6, message: 'Пароль должен быть не менее 6 символов', trigger: 'blur'}
      //   ]
      // },
    }
  },

  validations: {
    login: { required, minLength: minLength(4) },
    valuePassword: { required, minLength: minLength(4) }
  },

  mounted() {
    const {message} = this.$route.query

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
    async onSubmit() {
      // this.$refs.formLogin.validate(async valid => {
      //   if (valid) {
          this.loading = true

          const formData = {
            login: this.controls.login,
            password: this.controls.password
          }

          try {
            await this.$store.dispatch('auth/login', formData)
            this.$router.push('/challenges/my-profile')
            this.$message.success(`Добро пожаловать, ${this.controls.login}`)
          } catch (error) {
            console.log(error)
          } finally {
            this.loading = false
          }
        // }
      // })
    }
  }
}
</script>

<style lang="sass">

</style>

