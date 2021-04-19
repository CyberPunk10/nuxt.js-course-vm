<template>
<el-form
  ref="formAddcomment"
  :model="controls"
  :rules="rules"
  @submit.native.prevent="onSubmit"
>

  <h2>Добавить комментарий</h2>

  <el-form-item label="Ваше имя" prop="name">
    <el-input v-model="controls.name" />
  </el-form-item>

  <el-form-item label="Ваше комментарий" prop="text">
    <el-input
      type="textarea"
      v-model="controls.text"
      :rows="2"
    />
  </el-form-item>

  <el-form-item>
    <el-button
      type="primary"
      native-type="submit"
      round
      :loading="loading"
    >
      Добавить комментарий
    </el-button>
  </el-form-item>
</el-form>
</template>

<script>
export default {
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      controls: {
        name: '',
        text: ''
      },
      rules: {
        name: [
          {required: true, message: 'Имя не должно быть пустым', trigger: 'blur'}
        ],
        text: [
          {required: true, message: 'Введите ваш комментарий', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.formAddcomment.validate(async valid => {
        if (valid) {
          this.loading = true

          const formData = {
            name: this.controls.name,
            text: this.controls.text,
            postId: this.postId
          }

          try {
            const newComment = await this.$store.dispatch('comment/create', formData)
            this.$emit('created', newComment)
            this.$message.success('Комментарий добавлен')

            // setTimeout(() => {
            //   this.$emit('created')
            //   this.$message.success('Комментарий добавлен')
            // }, 500)
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

</style>
