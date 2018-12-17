<template>
<div>
    <Input v-model="searchData" @on-change="search" placeholder="输入搜索" clearable style="width: 200px" />
    <Tree :data="treeData" :render="renderContent"></Tree>
</div>

</template>
<script>
    export default {
        data () {
            return {
                searchData: '',
                treeData: [
                    {
                        title: 'parent 1',
                        expand: true,
                        
                        children: [
                            {
                                title: 'child 1-1',
                                expand: false,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        expand: false
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        expand: false
                                    }
                                ]
                            },
                            {
                                title: 'child 1-2',
                                expand: false,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: false
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: false
                                    }
                                ]
                            }
                        ]
                    }
                ],
                buttonProps: {
                    type: 'default',
                    size: 'small',
                }
            }
        },
        methods: {
            renderContent (h, { root, node, data }) {
                return h('span', {
                    style: {
                        display: 'inline-block',
                        width: '100%'
                    }
                }, [
                    h('span', [
                        h('Icon', {
                            props: {
                                type: 'ios-paper-outline'
                            },
                            style: {
                                marginRight: '8px'
                            }
                        }),
                        h('span', data.title)
                    ]),
                    h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '32px'
                        }
                    }, [
                      
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-add'
                            }),
                            style: {
                                marginRight: '8px'
                            },
                            on: {
                                click: () => { this.append(data) }
                            }
                        }),
                          !node.nodeKey? "" : h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-remove'
                            }),
                            on: {
                                click: () => { this.remove(root, node, data) }
                            }
                        })
                    ])
                ]);
            },
            append (data) {
                const children = data.children || [];
                children.push({
                    title: 'appended node',
                    expand: true
                });
                this.$set(data, 'children', children);
            },
            remove (root, node, data) {
                const parentKey = root.find(el => el === node).parent;
                const parent = root.find(el => el.nodeKey === parentKey).node;
                const index = parent.children.indexOf(data);
                parent.children.splice(index, 1);
            },
            filterTreeData(filterText, data){
                debugger
                let arr = []
                for(let i in data){
                    let obj = {}
                    if(data[i].children && data[i].children.length > 0){
                        obj.children = []
                        this.filterTreeData(filterText,data[i].children)
                        if(data[i].title.indexOf(filterText) > -1){
                              obj.children.push(data)
                        }
                    }else{
                        arr.push(obj)
                    }
                return arr                      
                }
            },
            search(){
                let a = this.filterTreeData(this.searchData, this.treeData[0].children)
                this.$set(this.treeData, 'children', a);
            }
        }
    }
</script>