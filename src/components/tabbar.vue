
<template>
  <!-- <div>
    <div>tabbar</div>
    <v-con name='appreciate'></v-con>
  </div> -->
  <v-tab-bar>
    <v-tab-bar-item to="/" label="Home">
      <i class="fa fa-address-book">
      </i>
      <!-- <v-con name='appreciate'></v-con> -->
    </v-tab-bar-item>
    <v-tab-bar-item to="/pages/list" label="List">
      <i class="fa fa-list">
      </i>
    </v-tab-bar-item>
    <v-tab-bar-item to="/pages/account" label="Account">
      <i class="fa fa-user">
      </i>
    </v-tab-bar-item>
    <v-tab-bar-item to="/pages/config" label="Config">
      <i class="fa fa-bars">
      </i>
    </v-tab-bar-item>
    <v-tab-bar-item to="/pages/tasks" label="Tasks">
      <i class="fa fa-tasks">
      </i>
    </v-tab-bar-item>
  </v-tab-bar>
</template>

<script>
export default {
  name: 'tabbar',
  components: {
  }
}
</script>

<style scoped>
  .icon{
    width: 20px;
    height: 20px;
  }
</style>
