<template>
  <div class="wrap-card-form-login">
    <h1 v-if="formLoginRegister">{{ formLoginRegister.title }}</h1>
    <form
      class="wrap-card-form"
      @submit.prevent="$emit('onSubmit')"
    >
      <slot />
    </form>
    <div class="after-card-content">
      <slot name="afterCardContent"></slot>
    </div>
  </div>
</template>


<script>
export default {
  props: ['formLoginRegister']
}
</script>

<style lang="sass">
.wrap-card-form-login
  max-width: 31rem
  box-sizing: content-box
  margin: 0 auto

  h1
    margin: .5rem 0 1.5rem 0
    font-size: 2.1rem
    font-family: $Montserrat
    font-weight: 700
    padding-left: .5rem

  .wrap-card-form
    border: 1px solid rgb(226,228,230)
    border-radius: $borderRadius
    background-color: rgb(236,238,240)
    margin: 0 auto 1rem
    padding: 2rem

    button
      margin-top: 1.5rem
      margin-bottom: .5rem
    p
      font-size: 1.2rem

  .after-card-content
    transition: all .15s ease
    width: 100%
    font-size: 1.4rem
    margin-top: 2rem
    a
      color: $blueDark
      &:hover
        text-decoration: underline
</style>

