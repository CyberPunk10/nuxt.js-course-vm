<template>
  <div class="content-center">
    <CardLoginRegister :CardLoginRegister="CardLoginRegister">
      <AppInputChallenge v-model.trim="controls.name" class="label_bold">Имя или Никнейм: </AppInputChallenge>
      <AppInputChallenge v-model.trim="controls.email" type="email" class="label_bold">Email: </AppInputChallenge>
      <AppInputChallenge v-model.trim="controls.password" type="password" class="label_bold">Пароль: </AppInputChallenge>
      <ButtonChallenge type="submit">Зарегистрироваться</ButtonChallenge>
      <p class="agree">Нажимая кнопку «Зарегистрироваться», вы принимаете пользовательское соглашение и политику конфиденциальности.</p>

      <template #afterCardContent>
        <p>Уже есть аккаунт?
          <NuxtLink to="/challenges/login">Войти</NuxtLink>
        </p>
      </template>

    </CardLoginRegister>
  </div>
</template>

<script>
export default {
  head: {
    title: `Создать пользователя | ${process.env.appName}`
  },
  layout: 'layoutMainChallenges',

  data() {
    return {
      loading: false,
      CardLoginRegister: {
        title: 'Регистрация аккаунта'
      },
      controls: {
        login: '',
        email: '',
        password: ''
      },
      rules: {
        login: [
          {required: true, message: 'Введите логин', trigger: 'blur'}
        ],
        password: [
          {required: true, message: 'Введите пароль', trigger: 'blur'},
          {min: 6, message: 'Пароль должен быть не менее 6 символов', trigger: 'blur'}
        ]
      }
    }
  },

  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true

          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password
            }
            await this.$store.dispatch('auth/createUser', formData)
            this.$message.success('Новый пользователь добавлен')
            this.controls.login = this.controls.password = ''
            this.loading = false
          } catch (error) {
            this.loading = false
            console.log(error)
          }
        }
      })
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
