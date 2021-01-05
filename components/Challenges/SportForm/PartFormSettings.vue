<template>
  <div>
    <div class="form-sport-settings">
      <div class="top-row">
        <p>Настройки</p>
      </div>
      <ul>
        <Checkbox tagLi title="Сокращать имена, если много колонок" id="shot-name" >descr</Checkbox>
        <li>
          Количество колонок<br>
          <RadioBtn class="comp-radioBtn" title="3" name="countCol" id="count-col-3" />
          <RadioBtn class="comp-radioBtn" title="4" name="countCol" id="count-col-4" isChecked/>
          <RadioBtn class="comp-radioBtn" title="5" name="countCol" id="count-col-5" />
            <!-- :value="players[index].result[indexInput]" -->
          <input
            class="input" type="number" min="0" max="100">
          <RadioBtn class="comp-radioBtn" title="по умолчанию" name="countCol" id="count-col-5" />
        </li>
        <Checkbox tagLi title="2 строки (mode 2)" id="mode2-checked" isChecked />
        <Checkbox tagLi title="Несколько человек" id="countPeople" isChecked >descr</Checkbox>
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
  grid: 1fr/1fr // row/col
  color: #999
  padding: 1rem

  .top-row
    height: 3rem
    width: 100%
    display: flex
    justify-content: center
    align-items: center

  ul li
    margin-left: .5rem
    margin-top: .5rem

  .comp-radioBtn
    margin: .5rem .5rem .5rem 0
    font-size: 1.2rem

  .input
    max-width: 4.5rem

</style>
