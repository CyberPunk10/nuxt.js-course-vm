<template>
  <div class="">
    <h1>my profile</h1>
    <p>Статистика</p>
    <p>Достижения</p>
    <p>Активные челленджи</p>
    <p>Фото</p>
    <p>ФИО</p>

    <br>

    <div class="text">Я не верю в завтра. Если ты не делаешь что-то сегодня - возможно, этого не будет никогда</div>

    <br>
    <hr>
    <br>

    <CalendarGitHub />

  </div>
</template>

<script>
export default {
  head: {
    title: `my profile | ${process.env.appName}`
  },

  layout: 'layout-main-challenges',

}
</script>

<style lang="sass">
</style>
