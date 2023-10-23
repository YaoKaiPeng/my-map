import { defineConfig } from 'umi'

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    { path: '/docs', component: 'docs' },
  ],
  headScripts: [
    'https://api.map.baidu.com/api?v=3.0&ak=5tvPbrYNfwc2gK0FFaFGsFsRqi9FIM3F',
  ],
  npmClient: 'pnpm',
})
