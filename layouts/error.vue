<template>
  <div>
    <div class="error-layout">
      <div class="error-content">
        <h1 class="error-title">Ошибка 404</h1>
        <nuxt-link to="/">Вернуться на главную</nuxt-link>
      </div>
    </div>
    <TeleportMenu/>
  </div>
</template>

<style lang="sass" scoped>
.error
  &-layout
    display: flex
    justify-content: center
    align-items: center
    width: 100%
  &-content
    display: flex
    flex-direction: column
    align-items: center
    padding-top: 4rem
  &-title
    color: rgb(250, 128, 114)
    margin-bottom: 1rem

</style>
