
import { setToken, getToken } from "../../util/tools"
import AllRoutesData from "../../router/fullRouter"
import router from "../../router/index.js"
import { initRouterNode } from "../../util/menu.js"
import UserApi from "../../api/user"
let userApi = new UserApi()
export default {
    state: {
        userId: "",
        access: [],
        menuList: [],
        slideMenu:[],
        resource: {},
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
        setSlideMenu(state, index){
            state.slideMenu =  state.menuList[index].children
        },
        setMenuList(state, menus) {
            
            let routers =  initRouterNode(menus)
            state.menuList = routers
            state.slideMenu =  state.menuList[0].children
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
                        commit("setMenuList", res.data.menus)
                        commit("setResource", res.data.resource)
                        resolve(res.data)
                    } else {
                        reject(err)
                    }
                })
            })
        }
    }

}

