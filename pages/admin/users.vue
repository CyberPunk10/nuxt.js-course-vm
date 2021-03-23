<template>
  <div>
    <h2 class="title-table font-how-h2">Таблица результатов</h2>
    <TableGridResultCh
      :users_data="posts"
      fixed_first_col="login"
      :onlyCols="onlyCols"
    />
      <!-- fixed_last_col="max" -->
    <br>

    <!-- form add new user -->
    <h2 class="title-table font-how-h2">User</h2>
    <el-card
      shadow="always"
      :style="{width: '500px'}"
    >
      <el-form
        ref="form"
        :model="controls"
        :rules="rules"
        @submit.native.prevent="onSubmit"
      >

        <h2>Создать пользователя</h2>

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
    </el-card>
  </div>
</template>

<script>
export default {
  head: {
    title: `Создать пользователя | ${process.env.appName}`
  },
  layout: 'admin',
  middleware: ['admin-auth'],

  data() {
    return {
      loading: false,

      // onlyCols: ['_id', 'login', 'created', 'email'],
      onlyCols: [
        { key: '_id', title: 'id' },
        { key: 'login', title: 'Логин' },
        { key: 'email', title: 'Email' },
        { key: 'created', title: 'Дата создания', formatter: 'date' },
      ],

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
  methods: {
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
