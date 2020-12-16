<template>
  <div class="form-sport">
    <h2>{{ formSport.title }}</h2>
    <PartFormTopLabel
      :count="this.formSport.countCol"
      :mode="formSport.mode"
      @addcol="addcol"
    />
    <PartFormMain
      v-for="(item, index) in formSport.players" :key="index"
      :mode="formSport.mode"
      :index="index"
      :players="formSport.players"
    />
    <PartFormRelax/>
    <PartFormResult
      :players="formSport.players"
    />
    <PartFormButtons/>
    <PartFormBottomTabs2/>
  </div>
</template>

<script>
export default {
  props: {
    formSport: {
      type: Object,
      required: true
    }
  },
  data() {
    return {

    }
  },

  computed: {
  },

  methods: {
    addcol() {
      ++this.countCol
    }
  }
}
</script>

<style lang="sass">

.form-sport
  max-width: 30rem
  margin: 0 auto 3rem
  h2
    @include font-how-h3
    padding: 1rem .5rem .5rem

// .form-sport-main,
// .form-sport-relax,
// .form-sport-result,
// .form-sport-top-label,
// .form-sport-buttons
//   box-shadow: 0 40px 40px rgba(0,0,0,.2)

.form-sport-top-label,
.form-sport-main,
.form-sport-main-2stroke,
.form-sport-relax,
.form-sport-result,
.form-sport-buttons
  display: grid
  grid-gap: 2px
  padding-left: 1rem
  padding-right: 0
  background-color: #2a2424
  font-family: 'Montserrat', sans-serif
  box-shadow: 0 15px 30px rgba(0,0,0,.2)

  .cell-input
    position: relative
    display: flex
    justify-content: center
    align-items: center
    min-width: 4rem

  .cell-descr
    justify-content: flex-start
  .cell-label
    font-size: 10px
    color: #999
  .input,
  .input-transparent
    border: none
    color: #fff
    min-height: 2.4rem
    min-width: 4rem
    width: 100%
  .input
    background-color: rgba(255,255,255,.1)
    border-radius: 4px
    text-align: center
  .input-transparent
    background-color: transparent

  .cell-result
    background-color: transparent
    color: #ffd438
  .cell-record
    background-color: #ffd438
    color: #2a2424
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
.form-sport-main-2stroke,
.form-sport-relax,
.form-sport-result
  font-size: 14px

</style>
