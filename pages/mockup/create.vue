<template>
  <div class="nesting-container-center">
    <div class="page-wrap-mockup-create">
      <h1 class="mb">Создать новый пост</h1>

      <el-form
        ref="form"
        :model="controls"
        :rules="rules"
        @submit.native.prevent="onSubmit"
      >

        <el-form-item
          label="Текст в формате .md или .html"
          prop="title"
        >
          <el-input
            type="text"
            v-model="controls.title"
          />
        </el-form-item>

        <el-form-item
          label="Текст в формате .md или .html"
          prop="text"
        >
          <el-input
            type="textarea"
            resize="none"
            :rows="10"
            v-model="controls.text"
          />
        </el-form-item>

        <el-button
          class="mb"
          type="success"
          plain
          @click="dialogVisible = true"
        >Предпросмотр</el-button>

        <el-dialog
          title="Предпросмотр"
          :visible.sync="dialogVisible"
          width="30%"
        >
          <div :key="controls.text">
            <div v-html="$md.render(controls.text)"></div>
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
          <div
            class="el-upload__tip"
            slot="tip"
          >файлы с расширением jpg/png</div>
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
  </div>
</template>

<script>
export default {
  head: {
    title: `Новый пост | ${process.env.appName}`
  },
  layout: 'layout-main-challenges',
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
          { required: true, message: 'Добавьте название поста', trigger: 'blur' }
        ],
        text: [
          { required: true, message: 'Поле не должно быть пустым', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    handleImageChange(file, fileList) {
      this.image = file.raw
      console.log('[FILE INFO]: ', file)

      // проверка размера файла
      if (file.size > 1024 * 1024 * 5) { // на беке тоже есть ограничение размера файла
        this.$message.warning('Размер картинки превышает допустимое значение')
        this.image = null
        this.$refs.upload.clearFiles()
        return
      }

      // проверка типа файла
      let fileExt = false
      const parts = file.name.split('.')
      if (parts.length > 1) fileExt = parts.pop()

      if (!(fileExt === 'jpg' || fileExt === 'jpeg' || fileExt === 'png')) { // на беке тоже есть ограничение типа файла
        this.$message.warning('Вы загружаете недопустимый тип файла. Загрузите JPG или PNG')
        this.image = null
        this.$refs.upload.clearFiles()
      }
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

            await this.$store.dispatch('post.actions/create', formData)
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

<style lang="sass">
.page-wrap-mockup-create
  max-width: 600px
  width: 100%
  .el-upload.el-upload--text,
  .el-upload-dragger
    min-width: 20rem
    max-width: 36rem
    width: 100% !important
</style>
