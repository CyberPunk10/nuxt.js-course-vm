<template>
  <div class="">

    <h4 class="mb3">Добавить прогресс</h4>

    <el-form ref="form"
      :model="controls"
      :rules="rules"
      label-width="120px"
      @submit.native.prevent="onSubmitAddProgressChallenge"
    >
      <el-form-item label="Title">
        <el-input v-model="controls.title"></el-input>
      </el-form-item>
      <el-form-item label="Color">
        <el-input v-model="controls.color"></el-input>
      </el-form-item>
      <el-form-item label="Count">
        <el-input v-model="controls.count"></el-input>
      </el-form-item>

      <el-form-item label="Date">
        <el-col :span="14">
          <el-date-picker type="date" placeholder="Pick a date" v-model="controls.date" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          :loading="loading"
        >Сохранить</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  head: {
    title: `Challenges | ${process.env.appName}`
  },
  layout: 'layout-main-challenges',

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
    onSubmitAddProgressChallenge() {
      console.log('Add progress Challenge')

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
h4
  text-align: center
.mb3
  margin-bottom: 3rem
  </style>
