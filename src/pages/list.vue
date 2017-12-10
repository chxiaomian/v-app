<template>
  <div class="container" id="list">
      <span class="title">List</span>
      <div class="row">
        <div class="col-xs-12">
          <ul class="list-group" v-for='use in users' :key="use.index">
            <li class="list-group-item">
              <span class="avatar">
                <img :src='use.avatar' class="img-circle">
              </span>
              <span class="name">{{use.name}}</span>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>



<script>
export default {
  name: 'list',
  data () {
    return {
      users: [
        {
          name: 'Zhang San',
          avatar: 'http://placehold.it/50x50/CC00FF/fff.png'
        },
        {
          name: 'Zhang San',
          avatar: 'http://placehold.it/50x50/CC00FF/fff.png'
        },
        {
          name: 'Zhang San',
          avatar: 'http://placehold.it/50x50/CC00FF/fff.png'
        },
        {
          name: 'Zhang San',
          avatar: 'http://placehold.it/50x50/CC00FF/fff.png'
        },
        {
          name: 'Zhang San',
          avatar: 'http://placehold.it/50x50/CC00FF/fff.png'
        },
        {
          name: 'Zhang San',
          avatar: 'http://placehold.it/50x50/CC00FF/fff.png'
        },
        {
          name: 'Zhang San',
          avatar: 'http://placehold.it/50x50/CC00FF/fff.png'
        },
        {
          name: 'Zhang San',
          avatar: 'http://placehold.it/50x50/CC00FF/fff.png'
        },
        {
          name: 'Zhang San',
          avatar: 'http://placehold.it/50x50/CC00FF/fff.png'
        },
        {
          name: 'Zhang San',
          avatar: 'http://placehold.it/50x50/CC00FF/fff.png'
        },
        {
          name: 'Zhang San',
          avatar: 'http://placehold.it/50x50/CC00FF/fff.png'
        },
        {
          name: 'Zhang San',
          avatar: 'http://placehold.it/50x50/CC00FF/fff.png'
        }
      ]
    }
  }
}
</script>


<style scoped>
span.avatar{
    float: left;
  }
.img-circle{
    border-radius:500px
  }
</style>
