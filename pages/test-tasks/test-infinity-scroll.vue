<template>
  <div class="wrap-test wrap-infinity-scroll">

    <h2>Загрузка контента с API по скроллу (infinity-scroll).</h2>

    <div class="text mb2">
      <p>Тестовое задание по Vue.js + Nuxt (Front-end разработчик)</p>
      <p>Требуется реализовать простое SPA на Vue + Nuxt</p>
      <p>Список того, что должно быть реализовано:</p>
      <ol class="style-list">
        <li>Получение анекдотов из API, формирование списка</li>
        <li>На первой странице – 10 анекдотов</li>
        <li>Новые записи подгружать по прокрутке вниз (реализация infinite-scroll)</li>
        <li>Поиск среди анекдотов по слову</li>
        <li>Возможность отметить анекдот лайком (клик на кнопку с текстом Like или иконкой thumbs up)</li>
        <li>Визуализация того, что анекдот отмечен лайком (подсветка блока любым цветом, отличным от основного цвета других блоков, в примере – Анекдот 4)</li>
        <li>Появление/исчезновение элементов в списке должно быть анимировано</li>
        <li>Сохранение информации об анекдотах, отмеченных лайком</li>
        <li>Сохранение измененных данных при перезагрузке страницы</li>
        <li>Адаптивность</li>
      </ol>
      <p>В проекте должна быть продемонстрирована правильная работа с хуками Vue/Nuxt и SSR</p>
      <p>Работу с данными, бизнес-логикой и состоянием необходимо вести во Vuex</p>
      <p>Не допускается использование Buefy/Vuetify и других UI-библиотек, но допускается использование сторонних компонентов и css-сеток (e.g bootstrap grid)</p>
      <p>API для получения анекдотов - <a
          class="link-typical"
          href="https://sv443.net/jokeapi/v2/"
        >https://sv443.net/jokeapi/v2/</a>, <a
          class="link-typical"
          href="https://v2.jokeapi.dev/"
        >(https://v2.jokeapi.dev/)</a></p>
      <p>Параметры для API: язык en-us, response format - JSON</p>
      <p>Необходимо вести проект на Github таким образом, чтобы была доступна история коммитов (не выгрузка одним коммитом)</p>
    </div>

    <AboutMe />

    <!-- <div class="info-array-liked">
      <p>Total Count Jokes: {{ totalCountJokes }}</p>
      <p>Indexes liked jokes: {{ idJokesLiked }}</p>
      <p>Current length list: {{ jokes.length }}</p>
    </div>
    <input
      class="search-input"
      @input="searchJokeByValue"
      type="text"
      autofocus
      placeholder="Введите слово для поиска среди анекдотов..."
    >

    <ul class="list">
      <template v-if="jokes">
        <li
          v-for="(joke, index) in jokes"
          :key="index"
        >
          <div
            class="card"
            :class="{liked: idJokesLiked.includes(joke.id)}"
          >Анекдот {{index + 1}}
            <span
              @click="toggleLike(joke.id, $event)"
              class="material-icons md-dark"
            >thumb_up</span>
          </div>
        </li>
      </template>

      <li
        ref="loadMore"
        v-if="!enough && !allJokesSavedLocal"
        @click="getData"
      >
        <div v-if="stateError &&  stateError.request && stateError.request.status === 429">
          <span class="text-error">
            Вы превысили лимит в 120 запросов в минуту и должны немного подождать,
            пока вам не разрешат отправлять запросы снова.

          </span>
          <br><br> <span> Попробовать снова</span>
        </div>
        <span v-else>Loading...</span>
      </li>
      <li
        ref="loadMore"
        v-if="allJokesSavedLocal"
      >
        <span class="text-error">Это все шутки, найденые на сервере по такому ключевому слову.</span>
      </li>
    </ul> -->

  </div>
</template>

<script>
export default {
  head: {
    title: `test-infinity-scroll | ${process.env.appName}`
  },

  layout: 'layout-main-challenges',

  // transition: 'home',

  async fetch() {
    await this.$store.dispatch('jokes/getData')
  },
  computed: {
    //   totalCountJokes() {
    //     return this.$store.getters['jokes/getTotalCountJokes']
    //   },
    //   jokes() {
    //     return this.$store.getters['jokes/getJokes']
    //   },
    //   enough() {
    //     return this.$store.getters['jokes/getEnough']
    //   },
    //   idJokesLiked() {
    //     return this.$store.getters['jokes/getLikedJokes']
    //   },
    //   stateError() {
    //     return this.$store.getters.getError
    //   },
    //   allJokesSavedLocal() {
    //     return this.$store.getters['jokes/getAllJokesSavedLocal']
    //   }
  },

  // watch: {
  //   jokes() {
  //     if (this.jokes.length < 10) {
  //       this.getData()
  //     }
  //   },
  //   stateError() {
  //     if (this.stateError?.code === 106) {
  //       this.getData()
  //     }
  //   }
  // },

  // beforeMount() {
  //   window.addEventListener("scroll", this.handleScroll)
  // },

  // mounted() {
  //   if (localStorage.getItem('data-liked-jokes') !== null) {
  //     this.$store.commit(
  //       'jokes/setFromLocalstorageLikedJokes',
  //       JSON.parse(localStorage.getItem('data-liked-jokes'))
  //     )
  //   }
  // },

  // beforeDestroy() {
  //   window.removeEventListener("scroll", this.handleScroll)
  // },

  methods: {
    // handleScroll() {
    //   if (this.enough) return
    //   let element_toTop = this.getElementOffset().top
    //   let current_distance = document.documentElement.scrollTop + window.innerHeight
    //   current_distance > element_toTop && this.getData()
    // },
    // getElementOffset() {
    //   let top = 0
    //   let element = this.$refs.loadMore
    //   do {
    //     top += element.offsetTop || 0
    //     element = element.offsetParent
    //   } while (element)
    //   return { top }
    // },
    // async getData() {
    //   await this.$store.dispatch('jokes/getData')
    // },
    // toggleLike(id, $event) {
    //   $event.target.parentElement.classList.toggle('liked')
    //   this.$store.dispatch('jokes/toggleLikedJoke', id)
    // },
    // searchJokeByValue($event) {
    //   this.$store.dispatch('jokes/searchJokeByValue', $event.target.value)
    // }
  },
}
</script>

<style lang="sass">
</style>
