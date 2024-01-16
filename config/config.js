import { defineConfig } from "umi";
const path = require('path')

export default defineConfig({
  routes: [
    { path: "/", component: "@/pages/index" },
    { path: "/docs", component: "@/pages/docs" },
  ],
  title:'franxxDaryl',
  history: { type: 'hash' },
  publicPath:'',
  base:'/',
  npmClient: 'yarn',
  theme: {
    "@primary-color": "#1DA57A"
  },
  favicons: ['favicon.ico'],
  chainWebpack(config, { webpack }) {
    // 设置 alias
    config.resolve.alias.set('a', 'path/to/a');
  
    // 删除进度条插件
    config.plugins.delete('progress');
	// config.entry = '../src/mian.js'
	// config.output.set('filename','pathdd.js');
	// config.entry('mian').add('../src/mian.js');
	config.output.filename('umi.js').libraryTarget('umd').library('_RUmi')
	// console.info(config.output)
  }
});
