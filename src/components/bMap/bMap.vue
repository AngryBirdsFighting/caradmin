<template>
   <div class= ''>
 <b-map  id= "allmap" class="map"></b-map>
   </div>
</template>

<script>
import BMap from 'BMap';
export default {
  data () {
    return {}

  },
  components: {

  },
  mounted() {
      this.ready();
  },
  methods: {
    ready: function() {
      var map = new BMap.Map('allmap');
      var point = new BMap.Point(104.075796, 30.659684);
      map.centerAndZoom(point, 14);
      map.addControl(new BMap.MapTypeControl());
      map.enableScrollWheelZoom(true);
      map.enableDoubleClickZoom(true);
      var marker = new BMap.Marker(point);
      map.addOverlay(marker);
    }
  }
 }
</script>

<style>
.map{
  height: 250px;
}
 
</style>
