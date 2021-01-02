<template>
  <div>
    <div class="form-sport-settings">
      <ul>
        <li><Checkbox title="Короткие имена" id="shot-name" description>descr</Checkbox></li>
        <li><Checkbox title="2 строки (mode 2)" id="mode2-checked" isChecked tag >descr</Checkbox></li>
        <li>
          <RadioBtn title="3" name="countCol" id="count-col-3" />
          <RadioBtn title="4" name="countCol" id="count-col-4" />
          <RadioBtn title="5" name="countCol" id="count-col-5" />Количество колонок (select/input) (3/4/5/input)
        </li>
        <li>Несколько человек</li>
        <li></li>
      </ul>
      <!-- name-col -->
      <div class="name-col">

      </div>

      <!-- main-col -->
      <div class="main-col">

      </div>

      <!-- btns-col -->
      <div class="btns-col">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object
    }
  },

  methods: {
    scrollMainCol(e) {
      const $elLeft = e.target.previousElementSibling.querySelector('.box-shadow')
      const $elRight = e.target.nextElementSibling.querySelector('.box-shadow')

      if (e.target.scrollLeft == 0) {
        $elLeft.classList.remove('active')
      } else {
        $elLeft.classList.add('active')
      }

      if (e.target.scrollWidth - e.target.scrollLeft == e.target.offsetWidth) {
        $elRight.classList.remove('active')
      } else {
        $elRight.classList.add('active')
      }
    },
  }
}
</script>

<style lang="sass">
.form-sport-settings
  border-top-right-radius: 1rem
  border-top-left-radius: 1rem
  grid: repeat(1, min(15rem))/1fr // row/col
  color: #999


</style>
