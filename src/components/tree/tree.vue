<template>
  <div>
    <Input v-model="filterText" placeholder="输入搜索" clearable style="width: 200px"/>
    <div style="height:800px; overflow-y: auto;">
      <eTree class="filter-tree"
        :data="treeData"
        :props="defaultProps"
        default-expand-all
        show-checkbox
        :filter-node-method="filterNode"
        ref="tree2"
      ></eTree>
    </div>
  </div>
</template>
<script>
export default {
  props: ["treeData"],
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val);
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  },

  data() {
    return {
      filterText: "",
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  }
};
</script>