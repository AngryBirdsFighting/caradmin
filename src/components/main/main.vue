
<template>
  <div>
    <Layout>
      <Sider hide-trigger >
        <slide-menu
          ref="slideMenu"
          :menuList="menuList"
          @on-open-change="menuChange"
          :openName="selectedArray"
          :activeName="selected"
          @on-select="toPage"
        ></slide-menu>
      </Sider>
      <Layout :style="{padding: '0 0 0 12px',width:'100%'}">
        <Content :style="{padding: '24px 0 0 0', background: '#fff'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  
  </div>
</template>
<script>
import slideMenu from "./slideMenu/slideMenu.vue";

import { mapGetters } from "vuex";
export default {
  data() {
    return {
      menuStyle: true,
      selected: "",
      selectedArray: []
    };
  },
  props: {
    menuList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    "slide-menu": slideMenu
  },
  watch: {
    $route(now, old) {
      this.updateMenu();
    }
  },
  mounted() {
    this.updateMenu();
  },
  methods: {
    toPage(name) {
      this.selected = name;
      let params = {};
      this.$router.push({ name, params });
    },
    menuChange(name) {
      this.selectedArray = name;
    },
    updateMenu() {
      let arr = this.$route.path.split("/");
      this.selected = arr[3];
      this.selectedArray = [arr[2]];
    }
  }
};
</script>



<style scoped>
</style>