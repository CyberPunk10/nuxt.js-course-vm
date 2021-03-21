<template>
  <div>
    <el-row class="cells-wrap">
    <!-- <el-col :xs="20" :sm="9" :md="9" :lg="6" v-for="(o) in 8" :key="o" :offset="2"> -->
    <!-- <div v-for="(o) in cells" :key="o.id">
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
    </div> -->
    <!-- </el-col> -->
  </el-row>
    <a href="" class="link-service" name="lesson">Аренда и обучение</a>
    <p>
      Аренда
      Колесо: NineBot One S2
      Стоимость: 1000 руб / 2 часа

      Обучение
      Колесо: NineBot One S2
      Стоимость: 2000 руб / 1 час
      Поставим на колесо за один урок
    </p>
    <a href="" class="link-service" name="vinil">Оклейка винилом</a>
    <a href="" class="link-service" name="gidroisol">Гидроизоляция</a>
  </div>
</template>

<script>
export default {
  layout: 'landing-layout',
  head: { title: 'Услуги' },

  // data() {
  //   return {
  //     currentDate: new Date().toLocaleString(),
  //     cells: [
  //       {id: 1, title: 'LG-MJ1', price: 300, priceLast: 360, imageSrc: '/landing/LG-MJ1__white.jpg'},
  //       {id: 2, title: 'LG NH1', price: 300, priceLast: 360, imageSrc: '/landing/SAMSUNG-25R__white.jpg'},
  //       // Типоразмер: аккумулятор 18650; Технология: Li-Ion; Кол-во в упаковке (шт): 1; Емкость (мАч): 3500; Напряжение (В): 3.75; Номинальный ток разряда (А): 10;
  //       {id: 3, title: 'SAMSUNG 35E', price: 300, priceLast: 360, imageSrc: '/landing/SAMSUNG-35E.jpg',
  //         description: {
  //           typeSize: '18650', countInBox: 1, container: 3500, V: 3.75, A: 10
  //         }
  //       }
  //     ]
  //   }
  // }
}
</script>

<style lang="sass" scoped>


</style>
