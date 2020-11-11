<template>
  <el-row class="cells-wrap">
    <!-- <el-col :xs="20" :sm="9" :md="9" :lg="6" v-for="(o) in 8" :key="o" :offset="2"> -->
    <div v-for="(o) in cells" :key="o.id">
      <el-card :body-style="{ padding: '0px' }" class="card-cells" shadow="hover">
        <img :src="o.imageSrc" class="image">
        <div style="padding: 14px;">
          <span>{{o.title}}</span>
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
      currentDate: new Date(),
      cells: [
        {id: 1, title: 'LG-MJ1', price: 'price', imageSrc: '/landing/LG-MJ1__white.jpg'},
        {id: 2, title: 'SAMSUNG-25R', price: 'price', imageSrc: '/landing/SAMSUNG-25R__white.jpg'},
        {id: 3, title: 'SAMSUNG-33G', price: 'price', imageSrc: '/landing/SAMSUNG-33G__white.jpg'}
      ]
    };
  }
}
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }

  .card-cells {
    max-width: 300px;
    margin: 2rem
  }

  .cells-wrap {
    display: flex;
    justify-content: center;
    margin: 2rem;
  }
</style>
