<template>
  <div class="add-progress">
    <h2 class="title-table font-how-h2">Добавить прогресс</h2>
    <div class="wrap-card-content">
      <form
        class="wrap-card-form"
        @submit.prevent="onSubmit"
      >
        <AppInputChallenge
          v-model.trim="controls.username"
          class="label_bold"
          placeholder="Username"
          autofocus
          :inputData="{ title: 'Имя пользователя' }"
          :v="$v.controls.username"
          :class="{invalid: $v.controls.username.$error}"
        >Username:</AppInputChallenge>

        <AppInputChallenge
          v-model.trim="controls.count"
          class="label_bold"
          placeholder="Количество"
          :inputData="{ title: 'Количество отжиманий' }"
          :v="$v.controls.count"
          type="number"
          min="0"
          :class="{invalid: $v.controls.count.$error}"
        >Количество отжиманий:</AppInputChallenge>

        <ButtonChallenge type="submit">Сохранить</ButtonChallenge>

      </form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
import gql from 'graphql-tag'

export default {
  mixins: [validationMixin],

  head: {
    title: `Challenges | ${process.env.appName}`
  },
  layout: 'layout-main-challenges',

  data() {
    return {
      loading: false,

      controls: {
        count: null,
        username: ''
      },
    }
  },

  validations: {
    controls: {
      count: { required },
      username: { required, minLength: minLength(4) }
    }
  },

  methods: {
    async onSubmit() {
      if (this.$v.controls.$invalid) {
        this.$v.$touch()
        return
      }
      if (!this.$v.controls.$error) {
        // console.log('Валидация прошла успешно')
        this.loading = true

        const formData = {
          count: this.controls.count,
          username: this.controls.username
        }

        // addProgress() {
        this.$apollo.mutate({
          mutation: gql`
            mutation addPush_ups($count: String!, $username: String!) {
              addPushUps(count: $count, username: $username) {
                id
                count
              }
            }
          `,
          variables: formData

        }).then(data => {
          // event.target.reset()
          // this.name = this.status = this.gender = this.image = ''
          console.log('kjkjkj', data)

        }).catch(error => {
          this.errors = error.graphQLErrors
          console.log(this.errors)
        }).finally(() => {
          this.loading = false
        })
      }
    },
  }
}
</script>


<style lang="sass">
</style>
