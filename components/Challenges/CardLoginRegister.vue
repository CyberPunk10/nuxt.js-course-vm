<template>
  <div class="wrap-card-form-login">
      <h1>{{ CardLoginRegister.title }}</h1>
    <form class="wrap-card-form"
      @submit.prevent="onSubmit"
    >
      <slot/>
    </form>
    <div class="after-card-content">
      <slot name="afterCardContent"></slot>
    </div>
  </div>
</template>


<script>
export default {
  head: {
    title: `Вход на сайт | ${process.env.appName}`
  },
  layout: 'emptyCenter',
  props: ['CardLoginRegister'],
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
  max-width: 31rem
  box-sizing: content-box
  margin: 0 auto

  p
    text-align: center
  h1
    margin: .5rem 0 1.5rem 0
    font-size: 2.1rem
    font-family: $Montserrat
    font-weight: 700
    padding-left: .5rem

  .wrap-card-form
    border: 1px solid rgb(226,228,230)
    border-radius: $borderRadius
    background-color: rgb(236,238,240)
    margin: 0 auto 1rem
    padding: 2rem

    button
      margin-top: 1.5rem
      margin-bottom: .5rem
    p
      font-size: 1.2rem

  .after-card-content
    // padding: 1.5rem
    transition: all .15s ease
    width: 100%
    font-size: 1.4rem
    margin-top: 2rem
    // padding-right: .2rem
    // p
      // text-align: right
    a
      color: $blueDark
      &:hover
        text-decoration: underline



</style>

