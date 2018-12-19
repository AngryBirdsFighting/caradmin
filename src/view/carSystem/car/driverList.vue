<template>
  <div>
     <Layout class="main-content">
    <Sider>
    
      <i-tree></i-tree>
    </Sider>
    <Layout class="table-content"   :style="{ height: height +'px'}">
       <i-map   class="map"></i-map>
    </Layout>
    </Layout>
   
  </div>
</template>

<script>
import iMap from "@com/map/map.vue"
import iTree from "@com/tree/tree.vue";
export default {
  data() {
    let vm = this;
    return {
    };
  },
  components: {
    "i-map": iMap,
      "i-tree": iTree
  },
     computed: {
    height() {
      let h = window.innerHeight - 114;
      return h;
    }
  },
  created() {
    
  }
};
</script>

<style>
.ivu-layout-sider{
  background: #fff !important
}
.ivu-layout-footer{
  background: #fff !important;
}
.main-content{
  padding-left:0!important;
}
.table-content{
  padding-left: 24px
}
</style>
