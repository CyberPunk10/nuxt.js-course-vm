<template>
  <h1>Очищаем данные</h1>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  beforeCreate() {
    this.$store.dispatch('authStore/logout')
    // this.$router.push('/admin/login?message=logout')
    this.$router.push('/challenges/login?message=logout')
  }
}
</script>
