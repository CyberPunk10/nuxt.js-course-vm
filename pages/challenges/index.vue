<template>
  <div>
    <p>Новости</p>
    <p>Промо</p>
    <p>Выбор челленджей</p>
    <p>Общий чат</p>
    <p>Виджет/Настройки</p>
    <p>Блог с примерами челленджей и мотивацией</p>
    <p>Категории челленджей (для интровертов/спорт/рисование/код/накопления/путешесвия)</p>
    <a href="tel: +7 (953) 165-56-21">+7 (953) 165-56-21</a>
  </div>
</template>

<script>
export default {
  head: {
    title: `Challenges | ${process.env.appName}`
  },
  layout: 'layout-main-challenges',
  middleware: ['scroll-top-to-start'],
  
  methods: {

  }
}
</script>

<style lang="sass">

</style>
