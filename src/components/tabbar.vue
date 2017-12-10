
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
    <v-tab-bar-item to="/list" label="List">
      <i class="fa fa-list">
      </i>
    </v-tab-bar-item>
    <v-tab-bar-item to="/account" label="Account">
      <i class="fa fa-user">
      </i>
    </v-tab-bar-item>
    <v-tab-bar-item to="/config" label="Config">
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
import Icon from 'vue-awesome/components/Icon'
export default {
  name: 'tabbar',
  components: {
    Icon
  }
}
</script>

<style scoped>
  .icon{
    width: 20px;
    height: 20px;
  }
</style>
