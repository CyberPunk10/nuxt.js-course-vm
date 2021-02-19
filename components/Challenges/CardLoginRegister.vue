<template>
  <div class="wrap-card-form-login">
    <h2>Войти на Challenges.org</h2>
    <form class="wrap-card-form"
      @submit.prevent="onSubmit"
    >
      <slot/>
    </form>
    <div class="btn-create-new-akk">
      <p>Создать новый аккаунт?
        <NuxtLink to="/challenges/register-user">
          Регистрация
        </NuxtLink>
      </p>
    </div>
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
  margin: 1rem
  box-sizing: content-box
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
    font-size: 1.4rem
    padding-right: .2rem
    p
      text-align: right
    a
      color: $blueDark
      &:hover
        text-decoration: underline



</style>

