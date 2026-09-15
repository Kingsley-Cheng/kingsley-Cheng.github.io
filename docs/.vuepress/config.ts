/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改都会重启 vuepress 服务。
 * 部分配置项的更新没有必要重启 vuepress 服务，建议请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会被覆盖
 */

import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import collections from './collections'
import navMenu from './components/navMenu'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '橙子歪树',
  description: '',

  bundler: viteBundler(),
  shouldPrefetch: false,

  theme: plumeTheme({

    // 导航栏设置
    navbar:navMenu,
    // 集合设置
    collections:collections,

    // 自动生成yaml
    autoFrontmatter: {
        title: true, // 自动生成标题
        createTime: true, // 自动生成创建时间
        permalink: true, // 自动生成永久链接
    },

    // markdown 设置
    markdown: {
      // katex 数学公式
      math: {
        type: 'katex',
      },

      // 内容注释
      annotation: true, 
      // 表格增强
      table: {
        // 表格默认对齐方式 'left' | 'center' | 'right'
        align: 'center',
        // 表格宽度是否为最大内容宽度
        // 行内元素不再自动换行，超出容器宽度时表格显示滚动条
        maxContent: false,
        // 表格宽度默认占据整行
        fullWidth: true,
        /**
         * 复制为 html/markdown
         * true 相当于 `all`，相当于同时启用 html 和 markdown
         */
        copy: false, // true | 'all' | 'html' | 'md'
      },

      // 开启PlantUML
      plantuml: true, 

    },
  }),
})
