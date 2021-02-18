<template>
  <div class="wrap-card-form-login">
    <h2>Войти на Challenges.org</h2>
    <form class="wrap-card-form">
      <AppInputChallenge v-model="controls.login" type="email">Логин или Email: </AppInputChallenge>
      <AppInputChallenge v-model="controls.password" type="password">Пароль: </AppInputChallenge>
    </form>

    <el-card
      shadow="always"
      :style="{width: '500px'}"
    >
      <el-form
        ref="formLogin"
        :model="controls"
        :rules="rules"
        @submit.native.prevent="onSubmit"
      >

        <h2>Войти в панель администратора</h2>

        <el-form-item label="Логин" prop="login">
          <el-input v-model.trim="controls.login" />
        </el-form-item>

        <el-form-item label="Пароль" prop="password" class="mb2">
          <el-input
            type="password"
            v-model.trim="controls.password"
          />
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            native-type="submit"
            round
            :loading="loading"
          >
            Войти
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
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
    onSubmit() {
      this.$refs.formLogin.validate(async valid => {
        if (valid) {
          this.loading = true

          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password
            }
            await this.$store.dispatch('auth/login', formData)
            // this.$router.push('/admin')
            this.$router.push('/challenges/my-profile')
            // this.$message.success('Вы зашли с правами админа')
            this.$message.success(`Добро пожаловать, ${this.controls.login}`)
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

.wrap-card-form-login
  h2
    text-align: center
    margin: 2rem

  .wrap-card-form
    background-color: rgb(236,238,240)
    border: 1px solid rgb(226,228,230)
    padding: 2rem
    width: 30rem
    margin: 0 auto 5rem
    border-radius: $borderRadius



</style>

