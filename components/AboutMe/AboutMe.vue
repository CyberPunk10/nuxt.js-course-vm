<template>
  <div class="info-block text">
    <div class="section">
      <p>Обо мне:</p>
      <ul>
        <li>Рязанов Константин Сергеевич</li>
        <li>
          <a
            href="tel: +7 (953) 165-56-21"
            class="link-typical"
          >+7 (953) 165-56-21</a>
        </li>
        <li>telegram: Konstantin_info</li>
        <li>watsapp: есть</li>
        <li>Почта: arx5067@yandex.ru</li>
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

    &:last-child
      margin-bottom: .5rem
  .section>p
    border-bottom: 1px solid #ccc
    margin-bottom: 1rem
    padding-bottom: .5rem
</style>
