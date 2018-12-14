
<template>
  <div>
    <Layout>
      <Sider hide-trigger :style="{background: '#fff',paddingBottom:'24px' }">
        <slide-menu
          :menuList="menuList[0].children"
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
import slideMenu from "../components/main/slideMenu/slideMenu";
// import collapsedMenu from "./collapsedMenu/collapsedMenu.vue";
// import headerBar from "../components/main/headerBar/headerBar.vue";

import { mapGetters } from "vuex";
export default {
  data() {
    return {
      // menuList: [],
      spanLeft: 3,
      spanRight: 21,
      menuStyle: true,
      selected: "list",
      selectedArray: ["goods"]
    };
  },
  components: {
    "slide-menu": slideMenu
    // "header-bar": headerBar
    // "collapsed-menu": collapsedMenu
  },
  computed: {
    height() {
      let h = window.innerHeight - 171;
      return h;
    },
    iconSize() {
      return this.spanLeft === 3 ? 14 : 24;
    },
    menuList() {
      return this.$store.state.user.slideMenu;
    }
  },
  created() {},
  methods: {
    toggleClick() {
      if (this.spanLeft === 3) {
        this.spanLeft = 1;
        this.spanRight = 23;
        this.menuStyle = false;
      } else {
        this.spanLeft = 3;
        this.spanRight = 21;
        this.menuStyle = true;
      }
    },
    toPage(name) {
      this.selected = name;
      let params = {};
      this.$router.push({ name, params });
    },
    menuChange(name) {
      this.selectedArray = name;
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