<template>
  <div>
    <Table stripe border :columns="columns" highlight-row :data="goodsList"></Table>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
  props: ["columns", "goodsList"],
  created() {
  }
};
</script>
