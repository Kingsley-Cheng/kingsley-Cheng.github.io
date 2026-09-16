import { defineNavbarConfig } from 'vuepress-theme-plume'

const navMenus = [
    {
        text: '首页',
        link: '/', 
        icon: 'material-symbols:home-outline'
    },
    {
        text: '简介',
        link: '/about/',
        icon: 'material-symbols:auto-stories'},
    {
        text: '笔记',
        icon:'material-symbols:notes',
        items:[
            {
                text:'FRM(一级)',
                link:'/frm1/',
                icon: 'mdi:bank-outline',
            },
            {
                text:'中级经济师',
                link:'/economist1/',
                icon: 'mdi:account-tie-outline',
            }

        ]
    }
]

export default defineNavbarConfig(navMenus)