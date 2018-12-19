<template>
  <div>
    <!-- <i-table v-if="goodsList.length > 0" :columns="columns" :goodsList="goodsList"></i-table>
    <i-page :listTotal="total"></i-page> -->
    <b-map  id= "map" class="map"></b-map>
  </div>
</template>

<script>
import bMap from "@com/bMap/bMap.vue"
export default {
  data() {
    let vm = this;
    return {
    };
  },
  components: {
    "b-map": bMap
  },
  created() {
    
  }
};
</script>

<style>
.map{
  height: 250px;
}
</style>
