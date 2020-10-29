<template>
  <div class="page-wrap">
    <h1 class="mb">Создать новый пост</h1>

    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      @submit.native.prevent="onSubmit"
    >

      <el-form-item label="Текст в формате .md или .html" prop="title">
        <el-input
          type="text"
          v-model.trim="controls.title"
        />
      </el-form-item>

      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input
          type="textarea"
          resize="none"
          :rows="10"
          v-model="controls.text"
        />
      </el-form-item>

      <el-button class="mb" type="success" plain @click="dialogVisible = true">Предпросмотр</el-button>

      <el-dialog
        title="Предпросмотр"
        :visible.sync="dialogVisible"
        width="30%">
        <div :key="controls.text">
          <vue-markdown>{{controls.text}}</vue-markdown>
        </div>
      </el-dialog>

      <el-upload
        class="mb"
        ref="upload"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-change="handleImageChange"
        :auto-upload="false"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">Перетащите сюда картинку<br>или <em>кликните для загрузки</em></div>
        <div class="el-upload__tip" slot="tip">файлы с расширением jpg/png</div>
      </el-upload>

      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          round
          :loading="loading"
        >
          Создать пост
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],

  data() {
    return {
      loading: false,
      dialogVisible: false,
      image: null,
      controls: {
        title: '',
        text: ''
      },
      rules: {
        title: [
          {required: true, message: 'Добавьте название поста', trigger: 'blur'}
        ],
        text: [
          {required: true, message: 'Поле не должно быть пустым', trigger: 'blur'}
        ]
      }
    }
  },

  methods: {
    handleImageChange(file, fileList) {
      this.image = file.raw
    },

    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid && this.image) {
          this.loading = true

          try {
            const formData = {
              title: this.controls.title,
              text: this.controls.text,
              image: this.image
            }

            await this.$store.dispatch('post/create', formData)
            this.$message.success('Пост создан')
            this.controls.title = this.controls.text = ''
            this.image = null
            this.$refs.upload.clearFiles()
          } catch (error) {
            console.log(error)
          } finally {
            this.loading = false
          }
        } else {
          this.$message.warning('Заполните все поля и загрузите картинку')
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
