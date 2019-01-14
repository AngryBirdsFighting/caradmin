
import { setToken, getToken } from "../../util/tools"
import router from "../../router/index.js"
import { initRouterNode } from "../../util/menu.js"
import UserApi from "../../api/carSystem/user"
let userApi = new UserApi()
export default {
    state: {
        userId: "",
        access: [],
        menuList: [],
        carMenu:[],
        goodsMenu:[],
        lightMenu:[],
        resource: {},
        defaultPath: "",
    },
    getters: {
    },
    mutations: {
        setUserId(state, userId) {
            state.userId = userId
            setToken("userId", userId)
        },
        setAccess(state, access) {
            state.access = access
        },
        setResource(state, resource){
            state.resource = resource
        },
        setGoodsMenu(state, menus){           
            state.goodsMenu =  menus
        },
        setCarMenu(state, menus){           
            state.carMenu =  menus
        },
        setLightMenu(state, menus){           
            state.lightMenu =  menus
        },
        setMenuList(state, menus) {       
            let routers =  initRouterNode(menus)
            state.menuList = routers
            router.addRoutes(routers.concat([{
                path: '*',
                redirect: '/404'
            }]));
        }
    },
    actions: {
        getUserMenu({ commit, state, rootState }) {
            if (!state.userId) {
                let userId = getToken("userId")
                commit("setUserId", userId)
            }
            return new Promise((resolve, reject) => {
                userApi.getUserInfo({ id: state.userId }, function (res, err) {
                    if (!err) {
                        if(res.data.menus && res.data.menus.length > 0){
                            // commit("setGoodsMenu", res.data.menus[0])
                            // commit("setCarMenu", res.data.menus[1])
                            // commit("setLightMenu", res.data.menus[2])
                            res.data.menus.forEach( item => {
                                
                                if(item.children && item.children.length > 0 && item.children[0].children.length > 0){
                                    if(!state.defaultPath){
                                        state.defaultPath = item.children[0].children[0].name
                                    }                                   
                                }
                                if(item.name == "goodsSystem"  && item.children.length > 0 && item.children[0].children.length > 0){
                                    commit("setGoodsMenu", item)
                                }else if(item.name == "lightSystem"  && item.children.length > 0 && item.children[0].children.length > 0){
                                    commit("setLightMenu", item)
                                }else if(item.name == "carSystem"  && item.children.length > 0 && item.children[0].children.length > 0){
                                    commit("setCarMenu", item)
                                }
                            });
                            commit("setMenuList", res.data.menus)
                            // commit("setResource", res.data.resource)
                            resolve(res.data)
                        }else{
                            router.push({name:"401"})
                        }
                       
                    } else {
                        reject(err)
                    }
                })
            })
        }
    }

}

