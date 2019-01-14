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
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <a style="float:right; margin-right: 10px" @click="loginOut">退出</a>
        <Dropdown style="float:right; margin-right: 40px" @on-click="changeState">
          <Button type="primary">
            {{selectedName}}
            <Icon type="ios-arrow-down"></Icon>
          </Button>
          <DropdownMenu slot="list" @on-visible-change="changeState">
            <DropdownItem
            
              v-for=" (item, index) in menuList"
            
              :key="index"
              :name="index"
            >{{item.meta.title}}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Header>
      <Layout>
        <router-view></router-view>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { removeToken } from "../util/tools.js";
export default {
  data() {
    return {
      menuList: [],
      selectedName: ""
    };
  },
  created() {
    this.menuList = this.$store.state.user.menuList;
    this.selectedName = this.menuList[0].meta.title;
  },
   mounted() {
     this.updateMenu()
  },
  methods: {
    changeState(index) {
      this.selectedName = this.menuList[index].meta.title;
      this.$router.push({
        name: this.menuList[index].children[0].children[0].name
      });
    },
    loginOut() {
      removeToken("userId");
      this.$router.push({ name: "login" });
    },
       updateMenu() {
      let arr = this.$route.path.split("/");
      let sleteData =   this.menuList .find(item => {
        return item.name == arr[1]
      })

    this.selectedName = sleteData.meta.title
    }
  }
};
</script>
