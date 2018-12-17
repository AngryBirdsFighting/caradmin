
<template>
  <div>
    <Layout>
      <Sider hide-trigger :style="{background: '#fff',paddingBottom:'24px' }">
        <slide-menu
          ref="slideMenu"
          :menuList="menuList"
          @on-open-change="menuChange"
          :openName="selectedArray"
          :activeName="selected"
          @on-select="toPage"
        ></slide-menu>
      </Sider>
      <Layout :style="{padding: '0 24px 24px',width:'100%'}">
        <Content
          :style="{padding: '24px', minHeight: '280px', background: '#fff',height: height +'px'}"
        >
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
    <div class="layout-copy">2011-2016 &copy; TalkingData</div>
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
  computed: {
    height() {
      let h = window.innerHeight - 171;
      return h;
    }
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
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
</style>