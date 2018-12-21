var path = require('path')
function resolve (dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}
module.exports = {
    // 构建好的文件输出到哪里
    baseUrl: "./", 
    // where to put static assets (js/css/img/font/...) // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败
    outputDir: "dist", 
    // 使用带有浏览器内编译器的完整构建版本 // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    lintOnSave: true, 
    // 使用带有浏览器内编译器的完整构建版本 // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    runtimeCompiler: false, 
    // babel-loader默认会跳过`node_modules`依赖. // 通过这个选项可以显示转译一个依赖
    transpileDependencies: [
      /* string or regex */
    ],
     // 是否为生产环境构建生成sourceMap?
    productionSourceMap: false, 
    // 调整内部的webpack配置. // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
      // 路径别名
      config.resolve.alias
        .set("@view", resolve('src/view'))
        .set("@com", resolve('src/components'))
        .set("@api", resolve('src/api'))
      // 加载外部插件
      config.externals({
        "BMap": "BMap"
      })
    },
    configureWebpack: () => {}, 
    // CSS 相关选项
    css: {
      // 将组件内部的css提取到一个单独的css文件（只用在生产环境）
      // 也可以是传递给 extract-text-webpack-plugin 的选项对象
      extract: true,
       // 允许生成 CSS source maps?
      sourceMap: false, 
      //将自定义选项传递给预处理器加载器。 例如 要将选项传递给// sass-loader，请使用{sass：{...}}
      loaderOptions: {}, 
      // 为所有css /预处理器文件启用CSS模块。 //此选项不会影响* .vue文件。
      modules: false
    },
     // 如果机器具有多于1个核心，则默认情况下启用生产构建中的babel和TS的线程加载器
    parallel: require("os").cpus().length > 1, 
    // PWA 插件相关配置 // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {}, 
    // configure webpack-dev-server behavior
    devServer: {
      proxy: {
        '/api': {
          target: "https://www.easy-mock.com/mock/5bf6a81192b5d9334494e8c9/admin",
          changeOrigin: true,
          ws: true,
          pathRewrite: {                //需要rewrite重写的, 如果在服务器端做了处理则可以不要这段
            '^/api': ''
          },
          historyApiFallback:{
            index:'./public/index.html'//index.html为当前目录创建的template.html
      }  
        },  
    }
      // before: app => {}
    }, 
    // 第三方插件配置
    pluginOptions: {
      // ...
    }
  };


  