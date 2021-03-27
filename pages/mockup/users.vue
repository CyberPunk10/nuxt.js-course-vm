<template>
  <div>
    <h2 class="title-table font-how-h2 mb2 mt3">Таблица результатов</h2>
    <TableGridResultCh
      :data_tables="posts"
      :fixed_first_col="fixed_first_col"
      :fixed_last_col="fixed_last_col"
      :onlyNeedCenterCols="onlyNeedCenterCols"
    />
    <br>

    <h2 class="title-table font-how-h2 tac mb2 mt3">Изменить пароль у пользователя</h2>
    <FormLoginRegister @onSubmit="updatePassword" class="align-left">
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
        :inputData="{ title: 'Новый пароль' }"
        :v="$v.formLogin.password"
        type="password"
        placeholder="Новый пароль"
      >Новый пароль:</AppInputChallenge>
        <!-- :class="{invalid: ($v.formLogin.password.$dirty && !$v.formLogin.password.required)}" -->

      <ButtonChallenge type="submit">Обновить пароль</ButtonChallenge>
    </FormLoginRegister>

    <!-- form add new user -->
    <h2 class="title-table font-how-h2 tac mb2 mt3">Создать пользователя</h2>
    <div class="wrap-card-content center wrap-create-users-admin">
      <el-form
        ref="form"
        :model="controls"
        :rules="rules"
        @submit.native.prevent="onSubmit"
      >
        <el-form-item label="Логин" prop="login">
          <el-input v-model.trim="controls.login" />
        </el-form-item>

        <el-form-item label="Email" prop="email" class="mb2">
          <el-input
            type="email"
            v-model.trim="controls.email"
          />
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
            Создать
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  head: {
    title: `Создать пользователя | ${process.env.appName}`
  },
  layout: 'layout-main-challenges',
  middleware: ['admin-auth'],

  data() {
    return {
      loading: false,

      fixed_first_col: { key: 'login', title: 'Логин', sort: 'text' },
      fixed_last_col: { key: 'email', title: 'Email', sort: 'text' },
      onlyNeedCenterCols: [
        { key: '_id', title: 'id', sort: 'text' },
        { key: 'password', title: 'Пароль', sort: 'text' },
        { key: 'created', title: 'Дата создания', sort: 'text', formatter: 'datetime'},
      ],

      // for form update password

      formLogin: {
        login: '',
        password: '',
      },

      // for form
      controls: {
        login: '',
        email: '',
        password: ''
      },
      rules: {
        login: [
          {required: true, message: 'Введите логин', trigger: 'blur'}
        ],
        email: [
          {required: true, message: 'Введите email', trigger: 'blur'},
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
        ],
        password: [
          {required: true, message: 'Введите пароль', trigger: 'blur'},
          {min: 6, message: 'Пароль должен быть не менее 6 символов', trigger: 'blur'}
        ]
      }
    }
  },

  async asyncData({ store }) {
    const posts = await store.dispatch('tableGoFrontend/fetchUsers')
    return { posts }
  },

  computed: {
    players() {
      return this.$store.getters['tableGoFrontend/getPlayers']
    },
  },

  // for form update password
  validations: {
    formLogin: {
      login: { required, minLength: minLength(4) },
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
    // for form update password
     async updatePassword() {
      if (this.$v.formLogin.$invalid) {
        this.$v.$touch()
        return
      }
      if (!this.$v.formLogin.$error) {
        this.loading = true

        const formData = {
          loginOrEmail: this.formLogin.login,
          password: this.formLogin.password
        }

        try {
          await this.$store.dispatch('auth/updatePassword', formData)
          this.$message.success(`Пароль успешно обновлен`)
        } catch (error) {
          console.log(error)
        } finally {
          this.loading = false
        }
      }
    },

    // for form create user
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true

          try {
            const formData = {
              login: this.controls.login,
              email: this.controls.email,
              password: this.controls.password
            }
            await this.$store.dispatch('auth/createUser', formData)
            this.$message.success('Новый пользователь добавлен')
            this.controls.login = this.controls.email = this.controls.password = ''
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
.wrap-create-users-admin
  min-width: 25rem
  max-width: 45rem
  width: 100%
  padding: 2rem
</style>
