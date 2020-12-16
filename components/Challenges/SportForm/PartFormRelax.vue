<template>
  <div class="form-sport-relax">
    <div class="cell-input cell-descr">Отдых:</div>
    <div class="cell-input">
      <!-- <input class="input cell-width-x3" type="text" value="вольный"> -->
      <select class="cell" id="select-time">
				<option selected>вольный</option>
				<option>15 сек</option>
				<option>30 сек</option>
				<option>45 сек</option>
				<option>1 мин</option>
				<option>2 мин</option>
				<option>3 мин</option>
				<option>4 мин</option>
				<option>5 мин</option>
				<option>свой вариант</option>
			</select>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.form-sport-relax
  grid: repeat(1, 4rem)/$width-first-column-grid 1fr // row/col
  padding-top: .5rem
  border-top: 1px solid rgba(255,255,255,.1)
  & > div.cell-input
    padding-right: 1rem
    .input
      width: 100%
  select.cell
    border: none
    border-radius: 4px
    padding: 3px 1rem
    width: 100%
    background-color: rgba(255,255,255,.1)
    color: #fff

    option
      margin: 40px
      background: #2a2424
      color: #fff

    option:not(:checked)
      background-color: #403a3a

    // option[value="1"]
    //   background: rgba(100, 100, 100, 0.3)

</style>


