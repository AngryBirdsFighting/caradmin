<template>
  <div>
    <!-- <i-table v-if="goodsList.length > 0" :columns="columns" :goodsList="goodsList"></i-table>
    <i-page :listTotal="total"></i-page> -->
    <i-map   class="map"></i-map>
  </div>
</template>

<script>
import iMap from "@com/map/map.vue"
export default {
  data() {
    let vm = this;
    return {
    };
  },
  components: {
    "i-map": iMap
  },
  created() {
    
  }
};
</script>

<style>
</style>
