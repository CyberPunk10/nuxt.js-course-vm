<template>
  <div class="error-layout">
    <div class="error-content">
      <h1 class="error-title">Ошибка 404</h1>
      <nuxt-link to="/">Вернуться на главную</nuxt-link>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.error
  &-layout
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    height: 90vh
  &-content
    display: flex
    flex-direction: column
    align-items: center

  &-title
    color: $red
    margin-bottom: 1rem

</style>
