<template>
  <div class="form-sport"
    @input="setInput"
    @click="click"
    :id="'index-form-' + indexForm"
  >
    <h2>{{ formSport.title }}</h2>
    <form @submit.prevent="onSubmit">
      <div class="shadow-form">
        <!-- tab 1 -->
        <PartFormMain
          v-if="formSport.activeTab == 1"
          :settings="formSport.settings"
          :players="formSport.players"
        />
        <PartFormRelax
          v-if="formSport.activeTab == 1"

        />
        <PartFormResult
          v-if="formSport.activeTab == 1"
          :players="formSport.players"
        />

        <!-- tab 2 -->
        <PartFormMain
          v-if="formSport.activeTab == 2"
          :settings="formSport.settings"
          :players="formSport.players"
        />

        <!-- tab 3 -->
        <PartFormSettings
          v-if="formSport.activeTab == 3"
          :settings="formSport.settings"
          :players="formSport.players"
        />

      </div>
      <PartFormBottomTabs
        @changeActiveTab="changeActiveTab"
        :activeTab="formSport.activeTab"
      />
    </form>
  </div>
</template>

<script>
export default {
  props: {
    formSport: {
      type: Object,
      required: true
    },
    indexForm: {
      type: Number,
      require: true
    }
  },
  data() {
    return {
      loading: false
    }
  },

  methods: {
    async onSubmit() {
      console.log('[onSubmit][this.formSport]', this.formSport)

      this.loading = true

      // есть ли валидация данных с формы? не проверил
      const formData = {
        title: this.formSport.title,
        description: this.formSport.description,
        idForm: this.formSport.idForm,
        players: this.formSport.players,
      }

      try {
        const newDataTreining = await this.$store.dispatch('challengeForms/addChallengeProgress', formData)
      //   this.$emit('created', newDataTreining) // если нужно менять что-то на клиенте, то создаем метод ( например очистить форму после отправки данных)
        this.$message.success('Данные формы сохранены в БД')
      } catch (error) {
        // this.loading = false
        console.log(error)
      } finally {
        this.loading = false
      }

    },
    changeActiveTab(id) {
      this.$store.dispatch('challengeForms/changeActiveTab', {indexForm: this.indexForm, idTab: id})
    },
    setInput(e) {
      this.$store.dispatch('challengeForms/setInput', {indexForm: this.indexForm, target: e.target})
    },
    click(e) {
      // console.log('click', e.target)
      const $target = e.target.closest('[data-click]')
      // console.log('[$target]', $target)

      if(!$target) return

      if ($target.dataset.click === 'addCol' && $target.classList.contains('active')) {
        this.$store.dispatch('challengeForms/addCol', this.indexForm)

        // скроллим вправо, чтобы видеть новую колонку
        // выставляем задержку, чтобы всё успело зарендериться перед скроллингом
        this.$nextTick(function () {
          scrollingToRight(this.indexForm)
        })
      } else if ($target.dataset.click === 'repeatInputValue' && $target.classList.contains('active')) {
        this.$store.dispatch('challengeForms/repeatLastResult', {indexForm: this.indexForm, target: $target})

        // скроллим вправо, чтобы видеть новую колонку
        // выставляем задержку, чтобы всё успело зарендериться перед скроллингом
        this.$nextTick(function () {
          scrollingToRight(this.indexForm)
        })
      }
    }
  }
}

// local functions

function scrollingToRight(indexForm) {
  // оставил setTimeout для более плавного действия
  setTimeout(() => {
    const $elMainCol = document.getElementById(`index-form-${indexForm}`)
      .querySelector('.form-sport-main .main-col')

    $elMainCol.scrollLeft = $elMainCol.scrollWidth - $elMainCol.offsetWidth
  },100)
}
</script>

<style lang="sass">
.form-sport
  max-width: 30rem
  margin: 0 auto 3rem

  // Убрать стрелочки с <input type=“number”>
  input[type='number']
    -moz-appearance: textfield
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button
    -webkit-appearance: none

  h2
    @include font-how-h3
    padding: 1rem .5rem .5rem

  form
    // $min-width-input-form-sport: 4rem
    border-radius: $borderRadiusForm
    color: #bbb
    .shadow-form
      border-radius: $borderRadiusForm
      border-bottom-right-radius: 0
      box-shadow: 0 30px 40px rgba($theme-color-orange, .4)

.form-sport-main,
.form-sport-relax,
.form-sport-result,
.form-sport-settings
  display: grid
  padding-left: 1rem
  padding-right: 0
  background-color: $theme-color-black
  font-family: 'Montserrat', sans-serif
  font-size: 1.4rem

  .cell-input
    position: relative
    display: flex
    justify-content: center
    align-items: center
    min-width: 4rem

  .cell-descr
    justify-content: flex-start
    user-select: none
  .cell-label
    font-size: 10px
    color: #999
  .input,
  .input-transparent
    border: none
    min-height: 2.4rem
    min-width: 4rem
    width: 100%
  .input
    background-color: #403a3a
    border-radius: 4px
    text-align: center
    color: #eee
  .input-transparent
    background-color: transparent
    color: #bbb

  .cell-result
    background-color: transparent
    color: $theme-color-yellow
  .cell-record
    background-color: $theme-color-yellow
    color: $theme-color-black
    position: relative
    &:before
      content: 'ок'
      position: absolute
      top: 0
      left: 0
      color: green
      z-index: 999
      background-color: red
      width: 10px
      height: 10px

</style>
