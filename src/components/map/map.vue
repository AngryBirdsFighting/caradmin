<template>
  <div>
    <div id="allmap" class="map"></div>
  </div>
</template>

<script>
import BMap from "BMap";
export default {
  data() {
    return {};
  },
  mounted() {
    this.ready();
  },
  methods: {
    ready: function() {
      var map = new BMap.Map("allmap");    // 创建Map实例
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 5);  // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.addControl(new BMap.MapTypeControl({
        mapTypes:[
                
        ]
      }));	  
      map.enableScrollWheelZoom();//开启鼠标滚轮缩放
    }
  }
};
</script>

<style>
.map {
  height: 100%;
}
</style>
