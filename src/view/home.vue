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
        <Dropdown style="float:right; margin-right: 20px"   @on-click= "changeState">
          <Button type="primary">
            {{selectedName}}
            <Icon type="ios-arrow-down"></Icon>
          </Button>
          <DropdownMenu slot="list" @on-visible-change="changeState">
            <DropdownItem  v-for=" (item, index) in menuList" :key="index"  :name='index'>{{item.meta.title}}</DropdownItem>
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
export default {
  data() {
    return {
        menuList: [],
        selectedName:""
    };
  },
    created() {
    this.menuList = this.$store.state.user.menuList;
    this.selectedName =  this.menuList[0].meta.title;
  },
  methods:{
    changeState(name){
      debugger
 this.selectedName = name
    }
  }
};
</script>
