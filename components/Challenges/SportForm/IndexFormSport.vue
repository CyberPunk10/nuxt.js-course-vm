<template>
  <div class="form-sport"
    @input="setInput"
    @click="click"
    :id="'index-form-' + indexForm"
  >
    <h2>{{ formSport.title }}</h2>
    <form @submit.prevent="onSubmit">
      <div class="shadow-form">
        <PartFormMain
          :settings="formSport.settings"
          :players="formSport.players"
        />
        <PartFormRelax/>
        <PartFormResult
          :players="formSport.players"
        />
        <PartFormButtons
          :activeTab="activeTab"
        />
      </div>
      <PartFormBottomTabs
        @changeActiveTab="changeActiveTab"
        :activeTab="activeTab"
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
      activeTab: '1',

      // не меняет входные данные, а копирует их в новый объект,
      // который будем менять и отправлять в БД
      // resultFormData2: this.formSport

      dataForBD: {
        idForm: this.formSport.idForm,
        title: this.formSport.title, // здесь разве что кастомные заголовки отправлять, а иначе боать их из коллекции типовых форм
      }
    }
  },

  computed: {
  },

  methods: {
    onSubmit() {
      console.log(this.formSport.players)
      console.log('[onSubmit]', this.resultFormData2)
    },
    changeActiveTab(id) {
      this.activeTab = id
    },
    setInput(e) {
      console.log('filter target', e.target)
      // разделяй и влавствуй! (сделать отдельные диспатчи здесь или в mutations?)
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
        // this.$nextTick(function () {
        //   scrollingToRight(this.indexForm)
        // })
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
form
  // $min-width-input-form-sport: 4rem
  border-radius: $borderRadiusForm
  color: #bbb
  .shadow-form
    border-radius: $borderRadiusForm
    border-bottom-right-radius: 0
    box-shadow: 0 30px 40px rgba(130, 100, 0,.4)

.form-sport
  max-width: 30rem
  margin: 0 auto 3rem
  h2
    @include font-how-h3
    padding: 1rem .5rem .5rem

// .form-sport-relax,
// .form-sport-result,
// .form-sport-buttons
//   box-shadow: 0 40px 40px rgba(0,0,0,.2)

.form-sport-main,
.form-sport-relax,
.form-sport-result,
.form-sport-buttons
  display: grid
  padding-left: 1rem
  padding-right: 0
  background-color: $theme-color-black
  font-family: 'Montserrat', sans-serif
  // box-shadow: 0 15px 30px rgba(130, 100, 0,.4)

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
  // .cell-label
  //   font-size:

.form-sport-main,
.form-sport-relax,
.form-sport-result
  font-size: 14px

</style>
