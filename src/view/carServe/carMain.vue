<template>
  <div class>
    <i-main :selected="selected" :selectedArray="selectedArray" :menuList="menuList"></i-main>
  </div>
</template>

<script>
import Main from "@com/main/main.vue";
export default {
  data() {
    return {
      selected: "",
      selectedArray: []
    };
  },
  components: {
    "i-main": Main
  },
  computed: {
    menuList() {
      return this.$store.state.user.carMenu.children;
    }
  },
  created() {
    this.selected = this.menuList[0].children[0].name;
    this.selectedArray = [this.menuList[0].name];
  }
};
</script>

<style>
</style>
