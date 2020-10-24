<template>
  <div>
    <h1>{{user.name}} with id {{$route.params.id}}</h1>
    <hr />
    <b>{{user.email}}</b>
  </div>
</template>

<script>
export default {
  validate({params}) {
    console.log(params)
    return /^\d+$/.test(params.id)
  },
  async asyncData({params, error, store}) {
    try {
      const user = await store.dispatch('users/fetchUserById', params.id)
      return {user}
    } catch (e) {
      error(e)
    }
  }
}
</script>
