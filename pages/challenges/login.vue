<template>
  <div class="wrap-card-form-login">
    <h2>Войти на Challenges.org</h2>
    <form class="wrap-card-form"
      @submit.prevent="onSubmit"
    >
      <AppInputChallenge v-model="controls.login" class="label_bold">Логин или Email: </AppInputChallenge>
      <AppInputChallenge v-model="controls.password" type="password" class="label_bold">Пароль: </AppInputChallenge>
      <ButtonChallenge type="submit" class="btn-opacity">Войти</ButtonChallenge>
    </form>
    <NuxtLink to="/challenges/register-user" class="btn-create-new-akk">
      <p>Создать новый аккаунт</p>
    </NuxtLink>
  </div>
</template>


<script>
export default {
  head: {
    title: `Вход на сайт | ${process.env.appName}`
  },
  layout: 'emptyCenter',
  data() {
    return {
      loading: false,
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

.wrap-card-form-login
  width: 30rem
  h2, p
    text-align: center
  h2
    margin: 2rem

  .wrap-card-form
    border: 1px solid rgb(226,228,230)
    border-radius: $borderRadius
    background-color: rgb(236,238,240)
    margin: 0 auto 1rem
    padding: 2rem

  .btn-create-new-akk
    // padding: 1.5rem
    transition: all .15s ease
    width: 100%
    color: $blueDark
    font-size: 1.4rem
    padding-right: .2rem
    &:hover
      text-decoration: underline
    p
      text-align: right

</style>

