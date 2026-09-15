import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
    type: 'doc',
    dir: 'frm1',
    title: 'FRM(一级)笔记',
    sidebar: 'auto', // 自动生成导航结构
    sidebarCollapsed: undefined, // 折叠状态：true-折叠 false-展开
})