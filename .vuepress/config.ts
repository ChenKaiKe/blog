import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: 'K天下无双',
  description: 'Just playing around',
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/favicon.ico',
    author: 'K天下无双',
    authorAvatar: '/favicon.ico',
    docsRepo: 'https://github.com/ChenKaiKe/blog.git',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '',
    navbar:[
      {
        text: 'Contact',
        children: [
          { text: 'GitHub', link: 'https://github.com/ChenKaiKe' },
        ]
      }
    ],
    // valineConfig 配置与 1.x 一致
    // commentConfig: {
    //   type: 'valine',
    //   options: {
    //     appId: 'Y9UzwquqBb7ePByRCaXIhsjy-gzGzoHsz',
    //     appKey: 'SisxpygXF73ddo6NBtG7mVeC',
    //     placeholder: '填写邮箱可以收到回复提醒哦！',
    //     verify: true, // 验证码服务
    //     recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   }
    // },
    
    autoAddCategoryToNavbar: true
  }),
  // debug: true,
  lang: 'zh-CN',
})
