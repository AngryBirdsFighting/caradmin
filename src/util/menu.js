
const lazyLoading = (url) =>()=>import(`../view${url}.vue`)
// 生成路由节点
export  const initRouterNode =  (data,a="") => {
  let routers = []
  for (var item of data) {
      item.component = lazyLoading(item.component);
      if (item.children && item.children.length > 0) {
          initRouterNode(item.children);
      }
      routers.push(item);
  }
  return routers
};