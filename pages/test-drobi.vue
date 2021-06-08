<template>
  <div class="wrap-test-drobi">
    <div
      class="row-formula"
      @input="setInput"
    >
      <template v-for="(fraction, index) in allFractions">
        <div
          class="fraction"
          :key="index"
        >
          <input
            class="input-num input_not-arrows"
            :value="fraction[0]"
            :v="$v.number"
            data-input="up"
            :data-index-fraction="index"
          >
          <input
            class="input-num input_not-arrows"
            :value="fraction[1]"
            :v="$v.number"
            :data-index-fraction="index"
          >
        </div>
        <span
          v-if="index !== allFractions.length - 1"
          :key="'plus_' + index"
          class="drobi__plus"
        >+</span>
      </template>
      <span class="drobi__equally">=</span>
      <span class="drobi__result">{{result}}</span>
    </div>
    <button @click="addFraction">Добавить дробь</button>

    <AboutMe />
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { numeric } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  head: {
    title: `test-drobi | ${process.env.appName}`
  },

  layout: 'layout-main-challenges',

  data() {
    return {
      number: ''
    }
  },

  validations: {
    number: { numeric }
  },

  computed: {
    allFractions() {
      return this.$store.getters['delTestDrobi/allFractions']
    },
    result() {
      return this.$store.getters['delTestDrobi/result']
    }
  },

  methods: {
    setInput(e) {
      if (e.target.value.length > 1) {
        e.target.value = e.target.value.substr(0, 2)
      }
      this.$store.dispatch('delTestDrobi/setInput', { target: e.target })
    },

    addFraction() {
      if (this.allFractions.length < 5) {
        this.$store.dispatch('delTestDrobi/addFraction')
      }
    }
  }
}
</script>

<style lang="sass">
.wrap-test-drobi
  .row-formula
    display: flex
    flex-wrap: wrap
    align-items: center
    margin-bottom: 2rem

  .fraction
    max-width: 4rem
    background-color: $color-purple
    padding: 3px
    border-radius: 4px
    input
      display: block
      width: 100%
      margin-bottom: 2px
      border-radius: 4px
      border-color: $color-purple
      text-align: center
      &:last-child
        margin-bottom: 0

  .drobi__plus,
  .drobi__equally,
  .drobi__result
    font-size: 3rem
    color: $color-purple
    padding: 1rem
  .drobi__result
    padding-left: 0

  button
    padding: .4rem 1rem
</style>
