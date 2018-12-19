
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

// export  const initRouterNode =  (data,a="") => {
//   let routers = []
//   for (var item in data) {
//     data[item].component = lazyLoading(data[item].component);
//       if (data[item].children && data[item].children.length > 0) {
//           initRouterNode(data[item].children);
//       }
//       routers.push(data[item]);
//   }
//   return routers
// };
// // 检查路由
// export const verificationRouter = data => {
//     if(data && data.length > 0){

//     }else{
        
//     }
// }