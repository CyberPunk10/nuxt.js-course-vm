<template>
  <div class="info-block text">
    <div class="section">
      <p>Обо мне:</p>
      <h2>Рязанов Константин Сергеевич</h2>
      <a
        href="tel: +7 (953) 165-56-21"
        class="link-typical"
      >+7 (953) 165-56-21</a>
      <ul>
        <li><b>Telegram:</b> <a
            href="https://t.me/Konstantin_info"
            class="link-typical"
          >Konstantin_info</a>
        </li>
        <li><b>Watsapp:</b> есть</li>
        <li><b>Почта:</b> arx5067@yandex.ru
          <button
            class="tac copy-btn"
            @click="clickClipboard"
            data-copy-value="arx5067@yandex.ru"
          >copy</button>
        </li>
      </ul>
    </div>

    <div class="section">
      <p>Ссылки:</p>
      <ul>
        <li>
          <a
            href="https://career.habr.com/vacancies/1000061913"
            class="link-typical"
          >Вакансия
          </a>
        </li>
        <li>
          <a
            href="https://spb.hh.ru/resume/9475f2daff046359ed0039ed1f536978694a48"
            class="link-typical"
          >Моё резюме
          </a>
        </li>
        <li>
          <a
            href="https://github.com/CyberPunk10"
            class="link-typical"
          >Мой профиль GitHub
          </a>
        </li>
        <li>
          <a
            href="https://github.com/CyberPunk10/nuxt.js-course-vm"
            class="link-typical"
          >Репозиторий этого сайта
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickClipboard(event) {
      navigator.clipboard.writeText(event.target.dataset.copyValue)
    }
  }
}
</script>

<style lang="sass">
.info-block.text
  display: flex
  flex-wrap: wrap
  margin-top: 2rem
  margin-bottom: 2rem
  .section
    min-width: 200px
    width: 48%
    margin: 1%
    margin-bottom: 2rem
    @media screen and (max-width: calc(#{$phoneWidth} - 1px)) // < 480px
      min-width: 98%

    &:first-child
      ul
        margin-top: 1rem
    &:last-child
      margin-bottom: .5rem
      li
        line-height: 3.5rem
    p
      border-bottom: 1px solid #ccc
      margin-bottom: 1rem
      padding-bottom: .5rem
    li
      line-height: 3rem

  .copy-btn
    width: 6rem
    line-height: 100%
    margin-left: 1rem
    background-color: rgb(236,238,240)
    border: 1px solid rgb(226,228,230)
    border-radius: $borderRadius
    transition: $transitionDefaultHover
    &:hover
      background-color: $theme-color-yellow
      border-color: $theme-color-yellow
      color: #92400e
</style>
