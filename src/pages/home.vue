
<template>
  <div class="home">
    <van-search
      v-model="value"
      placeholder="请输入商品名称"
      :showAction="true"
      @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item in swiperData" :key="item.id">
        <img :src="item.imgPath" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>

</template>


<script>
import { NavBar, Search, Lazyload } from 'vant'
// import { Search } from 'vant'
export default {

  name: 'home',

  data () {
    return {
      value: '',
      swiperData: []
    }
  },

  components: {
    NavBar,
    Search,
    Lazyload
  },

  beforeCreate () {
    this.$http.get('/api/swiperData')
    .then(response => {
      this.swiperData = response.data.swiperData
      console.log(this.swiperData)
    })
    .catch(e => {
      console.log(e)
    })
  },
  methods: {

    // onClickLeft () {
    //   console.table(this)
    // },

    // onClickRight () {
    //   console.table(this)
    // }
    onSearch () {
      console.log(this.value)
    }
  }
}
</script>

<style scoped>
.van-swipe-item{
  height: 100px;
  background-color:aqua;
}
</style>
