<template>
  <el-row class="cells-wrap">
    <!-- <el-col :xs="20" :sm="9" :md="9" :lg="6" v-for="(o) in 8" :key="o" :offset="2"> -->
    <div v-for="(o) in cells" :key="o.id">
      <el-card :body-style="{ padding: '0px' }" class="card" shadow="hover">
        <img :src="o.imageSrc" class="image">
        <div style="padding: 14px;">
          <span>{{o.title}}</span>
          <ul class="card__description-ul">
            <li><span>subtitle</span><span>test</span></li>
            <li><span>subtitle</span><span>test</span></li>
            <li><span>subtitle</span><span>test</span></li>
          </ul>
          <span class="card__price">{{o.price}} ₽</span>
          <span class="card__price-last">{{o.priceLast}} ₽</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">В корзину</el-button>
          </div>
        </div>
      </el-card>
    </div>
    <!-- </el-col> -->
  </el-row>
</template>

<script>
export default {
  layout: 'landingLayout',
  head: { title: 'Sborki' },

  data() {
    return {
      currentDate: new Date().toLocaleString(),
      cells: [
        {id: 1, title: 'LG-MJ1', price: 300, priceLast: 360, imageSrc: '/landing/LG-MJ1__white.jpg'},
        {id: 2, title: 'SAMSUNG-25R', price: 300, priceLast: 360, imageSrc: '/landing/SAMSUNG-25R__white.jpg'},
        {id: 3, title: 'SAMSUNG-33G', price: 300, priceLast: 360, imageSrc: '/landing/SAMSUNG-33G__white.jpg'}
      ]
    };
  }
}
</script>

<style lang="sass" scoped>

  .time
    font-size: 13px
    color: #999

  .bottom
    margin-top: 13px
    line-height: 12px

  .button
    padding: 0
    float: right

  .image
    width: 100%
    display: block

  .clearfix:before,
  .clearfix:after
    display: table
    content: ""

  .clearfix:after
    clear: bot

  .cells-wrap
    display: flex
    justify-content: center
    flex-wrap: wrap
    margin: 2rem

  .card
    width: 300px
    margin: 2rem

    &__description-ul
      padding: 2rem 0

      li
        display: flex
        justify-content: space-between
        color: #999
        padding-top: 1rem

    &__price
      font-size: 1.8rem
      font-family: system,-apple-system,BlinkMacSystemFont,'Segoe UI','Segoe WP',Roboto,Ubuntu,Oxygen,Cantarell,'Fira Sans','Helvetica Neue',Helvetica,'Lucida Grande','Droid Sans',Tahoma,'Microsoft Sans Serif',sans-serif
      font-weight: 700
    &__price-last
      position: relative
      font-size: 1.4rem
      font-family: system,-apple-system,BlinkMacSystemFont,'Segoe UI','Segoe WP',Roboto,Ubuntu,Oxygen,Cantarell,'Fira Sans','Helvetica Neue',Helvetica,'Lucida Grande','Droid Sans',Tahoma,'Microsoft Sans Serif',sans-serif
      font-weight: 700
      color: #8b8b8b
      &:before,
      &:after
        content: ''
        height: 1px
        left: -2px
        padding: 0 2px
        position: absolute
        width: 100%

      &:before
        background-color: #8b8b8b
        top: 10px

      &:after
        background: #fff
        top: 11px

</style>

