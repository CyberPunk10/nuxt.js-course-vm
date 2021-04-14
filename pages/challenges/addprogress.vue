<template>
  <div class="add-progress">
    <h2 class="title-table font-how-h2">Добавить прогресс</h2>
    <div class="wrap-card-content">
      <form
        class="wrap-card-form"
        @submit.prevent="onSubmit"
      >
        <AppInputChallenge
          v-model.trim="controls.username"
          class="label_bold"
          placeholder="Username"
          autofocus
          :inputData="{ title: 'Имя пользователя' }"
          :v="$v.controls.username"
          :class="{invalid: $v.controls.username.$error}"
        >Username:</AppInputChallenge>

        <AppInputChallenge
          v-model.trim="controls.count"
          class="label_bold"
          placeholder="Количество"
          autofocus
          :inputData="{ title: 'Количество отжиманий' }"
          :v="$v.controls.count"
          type="number"
          min="0"
          :class="{invalid: $v.controls.count.$error}"
        >Количество отжиманий:</AppInputChallenge>

        <ButtonChallenge type="submit">Сохранить</ButtonChallenge>

      </form>
    </div>

    <!-- <el-form ref="form"
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
    </el-form> -->

  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  head: {
    title: `Challenges | ${process.env.appName}`
  },
  layout: 'layout-main-challenges',

  data() {
    return {
      loading: false,

      controls: {
        count: null,
        username: ''
      },
    }
  },

  validations: {
    controls: {
      count: { required },
      username: { required, minLength: minLength(4) }
    }
  },

  methods: {
    async onSubmit() {
      if (this.$v.controls.$invalid) {
        this.$v.$touch()
        return
      }
      if (!this.$v.controls.$error) {
        // console.log('Валидация прошла успешно')
        this.loading = true

        const formData = {
          count: this.controls.count,
          username: this.controls.username
        }
        console.log(formData)

        try {
          await this.$store.dispatch('addProgress/addProgress', formData)
          //   this.$router.push('/challenges/my-profile')
          //   this.$message.success(`Добро пожаловать, ${this.controls.login}`)
        } catch (error) {
          console.log(error)
        } finally {
          this.loading = false
        }
      }
    },

    onSubmitAddProgressChallenge() {
      // console.log('Add progress Challenge')

      // this.$refs.form.validate(async valid => {
      //   if (valid) {
      //     this.loading = true

      //     try {
      //       const formData = {
      //         title: this.controls.title,
      //         date: this.controls.date,
      //         color: this.controls.color,
      //         count: this.controls.count
      //       }
      //       await this.$store.dispatch('challenge/create', formData)
      //       this.$message.success('Challenge создан')
      //       this.controls.title = ''
      //     } catch (error) {
      //       console.log(error)
      //     } finally {
      //       this.loading = false
      //     }

      //   } else {
      //     this.$message.warning('Заполните все поля')
      //   }
      // })
    }
  }
}
</script>


<style lang="sass">
// h4
//   text-align: center
// .mb3
//   margin-bottom: 3rem
</style>
