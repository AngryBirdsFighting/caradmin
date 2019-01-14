<template>
  <div>
    <Layout class="main-content">
      <!-- <Sider>
        <i-tree></i-tree>
      </Sider> -->
      <Layout class="table-content" :style="{ height: height +'px'}">
        <Header>Header</Header>
        <Content>
          <i-table
            v-if="goodsList.length > 0 &&  goodsType"
            :columns="columns"
            style="height:10vh"
            :goodsList="goodsList"
          ></i-table>
        </Content>
        <Footer>
          <i-page :listTotal="total"></i-page>
        </Footer>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import Goods from "@api/goods.js";
import iTable from "../../../components/table/table";
import iPage from "../../../components/page/page";
import iTree from "@com/tree/tree.vue";
let goods = new Goods();
export default {
  data() {
    let vm = this;
       return {
      columns: [
        {
          title: "会员名称",
          key: "name"
        },
        {
          title: "数量",
          key: "counts"
        },
        {
          title: "单价",
          key: "prize"
        },
        {
          title: "类别",
          key: "type",
          render: (h, params) => {
            const row = params.row;
            let t = vm.goodsType.find(item => {
              if (item.value == row.type) {
                return item;
              }
            });
            return h("span", t.name);
          }
        },
        {
          title: "添加时间",
          key: "createTime"
        },
        {
          title: "添加人",
          key: "createUser"
        },
        {
          title: "操作",
          key: "action",
          // minWidth: "400px",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  directives: [
                    {
                      name: "has",
                      value: "add",
                      arg: "add"
                    }
                  ],
                  on: {
                    click: () => {
                      // this.show(params.index);
                    }
                  }
                },
                "add"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  directives: [
                    {
                      name: "has",
                      value: "delete",
                      arg: "delete"
                    }
                  ],
                  on: {
                    click: () => {
                      // this.remove(params.index);
                    }
                  }
                },
                "delete"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  directives: [
                    {
                      name: "has",
                      value: "edit",
                      arg: "edit"
                    }
                  ],
                  on: {
                    click: () => {
                      // this.remove(params.index);
                    }
                  }
                },
                "edit"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  directives: [
                    {
                      name: "has",
                      value: "info",
                      arg: "info"
                    }
                  ],
                  on: {
                    click: () => {
                      // this.remove(params.index);
                    }
                  }
                },
                "info"
              )
            ]);
          }
        }
      ],
      goodsList: [],
      total: 0,
      goodsType: []
    };
  },
  computed: {
    height() {
      let h = window.innerHeight - 114;
      return h;
    }
  },
  components: {
    "i-table": iTable,
    "i-page": iPage,
    "i-tree": iTree
  },
  created() {
    let vm = this;
    goods.getDictionary("", (res, err) => {
      vm.goodsType = res.data.goods;
    });
    goods.getList((res, err) => {
      if (res.data.status == 1) {
        this.goodsList = res.data.list;
        this.total = 100;
      }
    });
  }
};
</script>

<style>
.ivu-layout-sider {
  background: #fff !important;
}
.ivu-layout-footer {
  background: #fff !important;
}
.main-content {
  padding-left: 0 !important;
}
.table-content {
  padding-left: 24px;
}
</style>
