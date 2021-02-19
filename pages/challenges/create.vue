<template>
  <div>
    <div class="mw500">
      <h4 class="mb3">Создать Ch</h4>
      <form @submit.prevent="onSubmit">
        <AppInput v-model="user.name" class="label-left">Название</AppInput>
        <AppTextArea v-model="user.description" label="width: 250px" class="label-left">Описание</AppTextArea>
        <AppInput v-model="user.category" class="label-left">Категория</AppInput>
        <AppInput v-model="user.email" type="email">Email: </AppInput>
        <!-- <ButtonChallenge type="submit" class="btn-opacity">Создать Ch</ButtonChallenge> -->
      </form>

      <Select id="select-1"/>

      <el-form ref="form"
        :model="controls"
        :rules="rules"
        label-width="200px"
        @submit.native.prevent="onSubmitCreateChallenge"
      >
        <el-form-item label="Название">
          <el-input v-model="controls.title"></el-input>
        </el-form-item>
        <el-form-item label="Описание">
          <el-input v-model="controls.description"></el-input>
        </el-form-item>
        <el-form-item label="Категория">
          <el-input v-model="controls.category"></el-input>
        </el-form-item>
        <el-form-item label="Цвет">
          <el-radio-group v-model="controls.radioСolor">
            <el-radio :label="'green'">Зелёный</el-radio>
            <el-radio :label="'yellow'">Жёлтый</el-radio>
            <el-radio :label="'blue'">Синий</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Кол-во дней">
          <el-input v-model="controls.count" :disabled="controls.checkbox"></el-input>
          <el-checkbox label="Бессрочный" v-model="controls.checked"></el-checkbox>
        </el-form-item>
        <el-form-item label="Программа минимум">
          <el-input v-model="controls.planMin"></el-input>
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
          >Создать</el-button>
        </el-form-item>
      </el-form>

      <Btn />
      <Checkbox title="title" id="21-mocup"/>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: `Challenges | ${process.env.appName}`
  },
  layout: 'layoutMainChallenges',

  data() {
    return {
      loading: false,
      controls: {
        title: 'Challenge-1',
        description: null,
        category: 'sport', // творчество
        radioСolor: 'green',
        planMin: null,
        date: null,
        count: null,
        checked: true,
        checkbox: true
      },
      rules: {
        title: [
          {required: true, message: 'Добавьте название поста', trigger: 'blur'}
        ],
        date: [
          {required: false, message: 'Поле не должно быть пустым', trigger: 'blur'}
        ],
        radioСolor: [
          {required: true, message: 'Поле не должно быть пустым', trigger: 'blur'}
        ],
        count: [
          {required: true, message: 'Поле не должно быть пустым', trigger: 'blur'}
        ]
      },

      user: {
        name: '',
        description: '',
        category: '',
        email: '',
      }
    }
  },

  methods: {
    onSubmitCreateChallenge() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true
          try {
            const formData = {
              title: this.controls.title,
              date: this.controls.date,
              color: this.controls.radioСolor,
              count: this.controls.count
            }
            console.log(formData)
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
  margin: 0 auto
h4
  text-align: center

.mb3
  margin-bottom: 3rem

</style>
