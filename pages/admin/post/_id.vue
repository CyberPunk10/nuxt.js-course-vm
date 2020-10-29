<template>
  <div class="page-wrap">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="mb">
      <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>{{post.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>Post with title: {{post.title}}</h1>

    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      @submit.native.prevent="onSubmit"
    >

      <!-- <h2>Войти в панель администратора</h2> -->

      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input
          type="textarea"
          resize="none"
          :rows="10"
          v-model.trim="controls.text"
        />
      </el-form-item>

      <div class="mb">
        <small>
          <i class="el-icon-time"></i>
          <span>{{new Date(post.date).toLocaleString()}}</span>
        </small>
        <small style="margin-left: 10px">
          <i class="el-icon-view"></i>
          <span>{{post.views}}</span>
        </small>
      </div>

      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          round
          :loading="loading"
        >
          Обновить
        </el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  head() {
    return {
      title: `Пост | ${this.post.title}`
    }
  },
  validate({params}) {
    return Boolean(params.id)
  },

  async asyncData({store, params}) {
    const post = await store.dispatch('post/fetchAdminById', params.id)
    return {post}
  },

  data() {
    return {
      loading: false,
      controls: {
        text: ''
      },
      rules: {
        text: [
          {required: true, message: 'Поле не должно быть пустым', trigger: 'blur'}
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
              text: this.controls.text,
              id: this.post._id
            }

            await this.$store.dispatch('post/update', formData)
            this.$message.success('Пост обновлен')
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

<style lang="sass" scoped>
.page-wrap
  max-width: 600px
</style>