<template>
  <div>
    <!-- <Button type="text">
      <Icon type="md-menu" @click="toggle" color="black" size="20"></Icon>
    </Button> -->
     <Dropdown style="float:right; margin-right: 20px">
        <Button type="primary">
            切换系统
            <Icon type="ios-arrow-down"></Icon>
        </Button>
        <DropdownMenu slot="list">
            <DropdownItem>车辆管理</DropdownItem>
            <DropdownItem>工地管理</DropdownItem>
            <DropdownItem>路灯管理</DropdownItem>
        </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    toggle(){
       this.$emit("on-toggle")      
    }
  }
};
</script>

<style>
</style>
