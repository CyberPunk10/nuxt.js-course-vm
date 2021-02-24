<template>
  <div>
    <CardLoginRegister :CardLoginRegister="CardLoginRegister" @onSubmit="onSubmit">
      <AppInputChallenge
        v-model.trim="controls.login"
        class="label_bold"
        :class="{invalid: ($v.login.$dirty && !$v.login.required)}"
        :inputData="inputLoginData"
        @func="setValue"
      >{{inputLoginData.title}}</AppInputChallenge>

      <AppInputChallenge
        v-model.trim="controls.password"
        class="label_bold"
        :class="{invalid: ($v.password.$dirty && !$v.password.required)}"
        type="password"
        :inputData="inputPasswordData"
        @func="setValue"
      >{{inputPasswordData.title}}</AppInputChallenge>

      <div class="input-field">
        <input
          type="text"
          id="id-input"
          v-model.trim="testField"
          :class="{invalid: ($v.testField.$dirty && !$v.testField.required)
                         || ($v.testField.$dirty && !$v.testField.minLength)}"
        >
        <label for="id-input">label</label>
        <small
          v-if="$v.testField.$dirty && !$v.testField.required"
          class="helper-text invalid"
        >small required</small>
        <small
          v-else-if="$v.testField.$dirty && !$v.testField.minLength"
          class="helper-text invalid"
        >small minLength = {{ testField.length }}</small>
      </div>

      <TestInputField
        v-model.trim="controls.testCompnentUnputField"
      />

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
      inputLoginData: {
        title: 'Логин или Email: ',
        autofocus: true,
        placeholder: 'напиши',
        invalid: { emptyField: false, incorrect: false },
      },
      inputPasswordData: {
        title: 'Пароль: ',
        autofocus: true,
        placeholder: 'напиши',
        invalid: { emptyField: false, incorrect: false },
      },
      testCompnentUnputField: {
        title: 'Пароль: ',
        autofocus: true,
        placeholder: 'напиши',
        invalid: { emptyField: false, incorrect: false },
      },

      // button: { type: 'submit', text: 'Save' },
      // valueEmail: '',
      controls: {
        login: '',
        password: '',
        testCompnentUnputField: ''
      },
      testField: ''
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
    // valuePassword: { required, minLength: minLength(4) }
    password: { required, minLength: minLength(4) },
    testField: { required, minLength: minLength(4) },
    testCompnentInputField: { required, minLength: minLength(4) }
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
    setValue (value, type) {
      // if (type === 'Email') {
        this.controls.login = value
        // this.TextAreaEmail.value = value
      // }
      this.handlerInputs()
    },

    handlerInputs () {
      this.inputLoginData.invalid.emptyField = (this.$v.login.$dirty && !this.$v.login.required)
      this.inputLoginData.invalid.incorrect = (this.$v.login.$dirty && !this.$v.login.minLength)
      this.testCompnentUnputField.invalid.emptyField = (this.$v.login.$dirty && !this.$v.login.required)
      this.testCompnentUnputField.invalid.emptyField = (this.$v.login.$dirty && !this.$v.login.minLength)
    },

    async onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }


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
.input-field
  input.invalid
    border-color: red
    // label
    // small
</style>

