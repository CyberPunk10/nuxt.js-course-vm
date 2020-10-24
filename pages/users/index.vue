<template>
    <section>
        <h1>{{pageTitle}}</h1>

        <ul>
          <li v-for="user of users" :key="user.id">
            <a href="#" @click.prevent="goTo(user)">User {{user.name}} {{user.email}}</a>
          </li>
        </ul>
    </section>
</template>

<script>
export default {
  // async asyncData({store, error}) {
  //   try {
  //     const users = await store.dispatch('users/fetchUsers')
  //     return {}
  //   } catch (e) {
  //     error(e)
  //   }
  // },
  // async fetch({store,error}) {
  //   try {
  //     if (store.getters['users/users'].length === 0) {
  //       await store.dispatch('users/fetchUsers')
  //     }
  //   } catch (e) {
  //     error(e)
  //   }
  // },
  data() {
    return {
      pageTitle: 'This is users page'
    }
  },
  computed: {
    users() {
      return this.$store.getters['users/users']
    }
  },
  methods: {
    goTo(user) {
      this.$router.push('/users/' + user.id)
    }
  }
}
</script>
