<template>
  <div class="form-sport">
    <h2>{{ formSport.title }}</h2>
    <PartFormTopLabel :count="this.formSport.countCol" @addcol="addcol"/>
    <PartFormMain
      v-for="(item, index) in formSport.players" :key="index"
      :mode="formSport.mode"
      :index="index"
      :players="formSport.players"
    />
    <PartFormRelax/>
    <PartFormResult/>
    <PartFormButtons/>
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
  box-shadow: 0 10px 10px rgba(0,0,0,.2)

  .cell-input
    position: relative
    display: flex
    justify-content: center
    align-items: center
    min-width: 4rem

  .cell-descr
    justify-content: flex-start
  .cell-descr-name
    overflow: hidden
  .cell-plus
    color: #ffd438
    font-size: 1.8rem
    padding-top: .2rem
    padding-right: .2rem
    p
      font-size: 10px
      color: #999
  .cell-plus.jcsb,
  .cell-plus.jcfe
    display: flex
    align-items: center
    padding-right: 1rem
  .cell-plus.jcsb
    justify-content: space-between
  .cell-plus.jcfe
    justify-content: flex-end

  input
    border: none
    text-align: center
    color: #fff
    background-color: rgba(255,255,255,.1)
    border-radius: 4px
    min-height: 2.4rem
    min-width: 4rem
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

.form-sport-top-label
  padding-top: 1rem
  font-size: 10px
  color: #aaa

.form-sport-main,
.form-sport-main-2stroke,
.form-sport-relax,
.form-sport-result
  font-size: 14px

</style>
