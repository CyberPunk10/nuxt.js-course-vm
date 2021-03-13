<template>
  <div class="">
    <h2 class="title-table font-how-h2">Таблица результатов</h2>
    <TableGridResultChRenderByRow
      :users_data="dataPushUps"
      fixed_first_col="name"
    />
    <br><hr><br>
    <h2 class="title-table font-how-h2">Таблица результатов</h2>
    <TableGridResultCh
      :users_data="players"
      fixed_first_col="name"
      fixed_last_col="id"
    />
    <br><hr><br>
    <h2 class="title-table font-how-h2">Таблица результатов</h2>
    <TableGridResultCh
      :users_data="players"
      fixed_first_col="name"
    />
    <br><hr><br>
    <h2 class="title-table font-how-h2">Таблица результатов</h2>
    <TableGridResultCh
      :users_data="players"
    />

    <br><hr><br>

    <div class="t-container" id="table-price">
		<div class="t-row">
			<div class="t-col t-col_6">
        <div class="title-Obvodny">Воронежская</div>
				<div id="table-Obvodny">
					<div class="darkgrey font-bold">Комната</div>
					<div class="darkgrey font-bold">До 7 дней</div>
					<div class="darkgrey font-bold">От 7 до 14 дней</div>
					<div class="darkgrey">2х местная</div>
					<div class="grey">550</div>
					<div class="grey">580</div>
					<div class="darkgrey">3х местная</div>
					<div class="grey">500</div>
					<div class="grey">480</div>
					<div class="darkgrey">4х местная</div>
					<div class="grey">450</div>
					<div class="grey">430</div>
					<div class="darkgrey font-bold">Комната</div>
					<div class="darkgrey font-bold">От 14 до 21 дня</div>
					<div class="darkgrey font-bold">От 21 до 30 дней</div>
					<div class="darkgrey">2х местная</div>
					<div class="grey">500</div>
					<div class="grey">470</div>
					<div class="darkgrey">3х местная</div>
					<div class="grey">450</div>
					<div class="grey">420</div>
					<div class="darkgrey">4х местная</div>
					<div class="grey">400</div>
					<div class="grey">370</div>
					<div class="subtitle-Obvodny">Для тех, кто живет больше месяца</div>
					<div class="darkgrey font-bold">Комната</div>
					<div class="darkgrey font-bold">Каждые 7 дней</div>
					<div class="darkgrey font-bold">Каждые 10 дней</div>
					<div class="darkgrey">2х местная</div>
					<div class="grey">3850</div>
					<div class="grey">4300</div>
					<div class="darkgrey">3х местная</div>
					<div class="grey">3500</div>
					<div class="grey">4000</div>
					<div class="darkgrey">4х местная</div>
					<div class="grey">3150</div>
					<div class="grey">3700</div>
					<div class="darkgrey font-bold">Комната</div>
					<div class="darkgrey font-bold">Каждые 15 дней</div>
					<div class="darkgrey font-bold">Каждые 30 дней</div>
					<div class="darkgrey">2х местная</div>
					<div class="grey">6000</div>
					<div class="grey">11000</div>
					<div class="darkgrey">3х местная</div>
					<div class="grey">5500</div>
					<div class="grey">10000</div>
					<div class="darkgrey">4х местная</div>
					<div class="grey">5000</div>
					<div class="grey">9000</div>
					<div class="darkgrey font-bold">Комната</div>
					<div class="darkgrey font-bold">Каждые 2 месяца</div>
					<div class="darkgrey font-bold">Каждые 3 месяца</div>
					<div class="darkgrey">2х местная</div>
					<div class="grey">20000</div>
					<div class="grey">29500</div>
					<div class="darkgrey">3х местная</div>
					<div class="grey">18000</div>
					<div class="grey">26500</div>
					<div class="darkgrey">4х местная</div>
					<div class="grey">16000</div>
					<div class="grey">23500</div>
				</div>
			</div>
			<div class="t-col t-col_6">
        <div class="title-Ligovskiy">Лиговский</div>
				<div id="table-Ligovskiy">
					<div class="darkgrey font-bold">Комната</div>
					<div class="darkgrey font-bold">До 7 дней</div>
					<div class="darkgrey font-bold">От 7 до 14 дней</div>
					<div class="darkgrey">2х местная</div>
					<div class="grey">550</div>
					<div class="grey">580</div>
					<div class="darkgrey">4х местная</div>
					<div class="grey">500</div>
					<div class="grey">480</div>
					<div class="darkgrey">8ми местная</div>
					<div class="grey">450</div>
					<div class="grey">430</div>
					<div class="darkgrey font-bold">Комната</div>
					<div class="darkgrey font-bold">От 14 до 21 дня</div>
					<div class="darkgrey font-bold">От 21 до 30 дней</div>
					<div class="darkgrey">2х местная</div>
					<div class="grey">500</div>
					<div class="grey">470</div>
					<div class="darkgrey">4х местная</div>
					<div class="grey">450</div>
					<div class="grey">420</div>
					<div class="darkgrey">8ми местная</div>
					<div class="grey">400</div>
					<div class="grey">370</div>
					<div class="subtitle-Obvodny">Для тех, кто живет больше месяца</div>
					<div class="darkgrey font-bold">Комната</div>
					<div class="darkgrey font-bold">Каждые 7 дней</div>
					<div class="darkgrey font-bold">Каждые 10 дней</div>
					<div class="darkgrey">2х местная</div>
					<div class="grey">3850</div>
					<div class="grey">4300</div>
					<div class="darkgrey">4х местная</div>
					<div class="grey">3500</div>
					<div class="grey">3700</div>
					<div class="darkgrey">8ми местная</div>
					<div class="grey">3150</div>
					<div class="grey">3300</div>
					<div class="darkgrey font-bold">Комната</div>
					<div class="darkgrey font-bold">Каждые 15 дней</div>
					<div class="darkgrey font-bold">Каждые 30 дней</div>
					<div class="darkgrey">2х местная</div>
					<div class="grey">6000</div>
					<div class="grey">11000</div>
					<div class="darkgrey">4х местная</div>
					<div class="grey">5000</div>
					<div class="grey">9000</div>
					<div class="darkgrey">8ми местная</div>
					<div class="grey">4450</div>
					<div class="grey">7900</div>
					<div class="darkgrey font-bold">Комната</div>
					<div class="darkgrey font-bold">Каждые 2 месяца</div>
					<div class="darkgrey font-bold">Каждые 3 месяца</div>
					<div class="darkgrey">2х местная</div>
					<div class="grey">20000</div>
					<div class="grey">29500</div>
					<div class="darkgrey">4х местная</div>
					<div class="grey">16000</div>
					<div class="grey">23500</div>
					<div class="darkgrey">8ми местная</div>
					<div class="grey">13800</div>
					<div class="grey">20200</div>
				</div>
			</div>
		</div>
	  </div>
  </div>
</template>

<script>
export default {
  head: {
    title: `Challenges | ${process.env.appName}`
  },
  layout: 'layout-main-challenges',
  computed: {
    players() {
      return this.$store.getters['tableGoFrontend/getPlayers']
    },
    dataPushUps() {
      return this.$store.getters['tableGoFrontend/getDataPushUps']
    },
    dataPushUpsCols() {
      console.log(Object.entries(this.dataPushUps[0].years))
      return Object.entries(this.dataPushUps[0].years[2020].month)
    }
  }
}
</script>

<style lang="sass">
  .title-table
    margin: 1rem .5rem
    // color: #2F4050
    @media screen and (min-width: $phoneWidth) // >= 480px
      margin: 1rem

  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap')
  // @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap')

  #table-price
    padding-bottom: 35px

  #table-Obvodny, #table-Ligovskiy
    margin-top: 30px
    margin-bottom: 20px
    display: grid
    grid: repeat(8, 1fr) 1.5fr repeat(12, 1fr)/0.75fr repeat(2, 1fr)
    grid-gap: 1px
    background-color: #e2e2e2
    border: 1px solid #e2e2e2
    font-family: 'Montserrat', sans-serif
    font-size: 14px

  /* box-shadow: 0px 0px 0px 1px #ddd; - альтернативный способ сделать границы в грид сетке (применется к items) */

  #table-Obvodny>div, #table-Ligovskiy>div
    display: flex
    justify-content: center
    align-items: center
    padding: 4px
    transition: linear .15s

  #table-Obvodny>div:hover, #table-Ligovskiy>div:hover
    background-color: #ffead2
    color: #444

  .title-Obvodny, .title-Ligovskiy
    grid-column: 1/4
    grid-row: 1/2
    font-size: 30px
    font-family: 'Lobster', cursive
    // color: #ecb87f
    color: #fcb160
    text-align: center

  .subtitle-Obvodny, .subtitle-Ligovskiy
    grid-column: 1/4
    grid-row: 9/10
    font-size: 20px
    font-family: 'Lobster', cursive
    color: #ecb87f

  .white
    background-color: #fff

  .darkgrey
    background-color: #eee

  .grey
    background-color: #f9f9f9

  .font-bold
    font-weight: bold

  @media(max-width: 450px)
    #table-price .t-col
      padding-left: 0
      padding-right: 0

    #table-Obvodny, #table-Ligovskiy
      font-size: 11px

    #table-Obvodny>div, #table-Ligovskiy>div
      padding: 2px

    .subtitle-Obvodny, .subtitle-Ligovskiy
      font-size: 16px

</style>
