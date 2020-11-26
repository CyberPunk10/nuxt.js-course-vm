<template>
  <div class="mw500">
    <el-form ref="form"
      :model="controls"
      :rules="rules"
      label-width="120px"
      @submit.native.prevent="onSubmit"
    >
      <el-form-item label="title">
        <el-input v-model="controls.title"></el-input>
      </el-form-item>
      <el-form-item label="date">
        <el-input v-model="controls.date"></el-input>
      </el-form-item>
      <el-form-item label="color">
        <el-input v-model="controls.color"></el-input>
      </el-form-item>
      <el-form-item label="count">
        <el-input v-model="controls.count"></el-input>
      </el-form-item>


      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          :loading="loading"
        >Create</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        controls: {
          title: 'challenge-1',
          date: null,
          color: '-ch1',
          count: 0,
        },
        rules: {
          title: [
            {required: true, message: 'Добавьте название поста', trigger: 'blur'}
          ],
          date: [
            {required: false, message: 'Поле не должно быть пустым', trigger: 'blur'}
          ],
          color: [
            {required: true, message: 'Поле не должно быть пустым', trigger: 'blur'}
          ],
          count: [
            {required: true, message: 'Поле не должно быть пустым', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');

        this.$refs.form.validate(async valid => {
          if (valid) {
            this.loading = true

            try {
              const formData = {
                title: this.controls.title,
                date: this.controls.date,
                color: this.controls.color,
                count: this.controls.count
              }
              await this.$store.dispatch('challenge/create', formData)
              this.$message.success('Challenge создан')
              this.controls.title = ''
            } catch (error) {
              console.log(error)
            } finally {
              this.loading = false
            }
          } else {
            this.$message.warning('Заполните все поля')
          }
        })

      }
    }
  }
</script>

<style lang="sass">
.mw500
  max-width: 50rem
  margin: 3rem auto 0
</style>
