<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
            <Input type="text" v-model="formInline.userName" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
    </Form>
</template>
<script>
import User from "../../api/carSystem/user.js"
import { mapActions, mapMutations } from "vuex"
let user = new User()
    export default {
        data () {
            return {
                formInline: {
                    userName: '',
                    password: ''
                },
                ruleInline: {
                    userName: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度最少6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {     
            ...mapActions([ 
            'getUserMenu'
            ]), 
            ...mapMutations([ 
            'setUserId'
            ]), 
            handleSubmit(name) {
                let vm = this
                this.$refs[name].validate((valid) => {
                   user.login(this.formInline,(res, err) => {
                       if(!err){
                           vm.setUserId(res.data.userId)
                           vm.getUserMenu().then((res) => {
                               
                               vm.$router.push({name: this.$store.state.user.defaultPath})
                           }).catch((err) => {
                               alert(err)
                           })
                       }
                   })
                })
            },

        }
    }
</script>