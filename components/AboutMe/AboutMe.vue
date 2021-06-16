<template>
  <div class="info-block text">
    <h2>Рязанов Константин Сергеевич</h2>
    <div class="wrap-sections">
      <div class="section">
        <p>Контакты:</p>
        <ul>
          <li><b>Телефон:</b>
            <a
              href="tel: +7 (953) 165-56-21"
              class="link-typical"
            >+7 (953) 165-56-21</a>
          </li>

          <li><b>Telegram:</b>
            <a
              href="https://t.me/Konstantin_info"
              class="link-typical"
            >Konstantin_info</a>
          </li>

          <li><b>WatsApp:</b>
            <a
              href="https://wa.me/79531655621"
              class="link-typical"
            >+7 (953) 165-56-21</a>
          </li>

          <li><b>Почта:</b>
            <a
              href="mailto:arx5067@yandex.ru"
              class="link-typical"
            >arx5067@yandex.ru</a>
          </li>
        </ul>
      </div>

      <div class="section">
        <p>Ссылки:</p>
        <ul>
          <template v-if="links">
            <li
              v-for="(link, index) in links"
              :key="index"
            >
              <a
                :href="link.url"
                class="link-typical"
              >{{link.title}}
              </a>
            </li>
          </template>
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
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array
    }
  }
}
</script>

<style lang="sass">
.info-block.text
  margin-top: 2rem
  margin-bottom: 1.5rem
  h2
    margin: 1%
    @media screen and (max-width: calc(#{$phoneWidth} - 1px)) // < 480px
      margin-bottom: 1.5rem

.wrap-sections
  display: flex
  flex-wrap: wrap
  .section
    min-width: 200px
    width: 48%
    margin: 1%
    margin-bottom: 1.5rem
    @media screen and (max-width: calc(#{$phoneWidth} - 1px)) // < 480px
      min-width: 98%

    &:last-child
      margin-bottom: .5rem
    p
      border-bottom: 1px solid #e6e6e6
      margin-bottom: 1rem
      padding-bottom: .5rem
    li
      line-height: 3.5rem
</style>
