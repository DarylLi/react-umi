import { defineConfig } from "umi";

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MikaWebpackPlugin = require('mika-pack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const path = require('path')

export default defineConfig({
  routes: [
    { path: "/", component: "@/pages/index" },
    { path: "/docs", component: "@/pages/docs" },
  ],
  title:'mika~',
  history: { type: 'hash' },
  publicPath:'',
  base:'/',
  npmClient: 'yarn',
  theme: {
    "@primary-color": "#1DA57A"
  },
  links: [{ href: 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.20/fullpage.css', rel: 'preload' }],
  scripts:process.env.NODE_ENV ==='development'
  ?[`../dll/common_react.js`,`window._kiramikapassword='woyaosese'`,'https://cdn.jsdelivr.net/npm/pixi.js@7.x/dist/pixi.min.js','https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.20/fullpage.min.js']
  : [`../dll/common_react.js`,`window._kiramikapassword='woyaosese'`,'https://cdn.jsdelivr.net/npm/pixi.js@7.x/dist/pixi.min.js','https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.20/fullpage.min.js'],
  favicons: ['favicon.ico'],
  chainWebpack(config, { webpack }) {
    // 设置 alias
    config.resolve.alias.set('a', 'path/to/a');
	const dllRoot = `../dll`;
	config.plugin('DllReferencePlugin').use(webpack.DllReferencePlugin, [
	  {
	    context: path.resolve(__dirname, '../'),
		manifest: path.resolve(__dirname, '../dll/common_react-manifest.json')
	    // manifest: manifest,
	  },
	]);
	// config.plugin('MikaWebpackPlugin').use(MikaWebpackPlugin, [
	//   {
	//    options: {
	// 	   done:()=>{console.log('giao~!')}
	//    }
	//   },
	// ]).tap(options  => {
	// 	options.done =()=> {console.log('giao~!')}
	// 	return options
	// })    
	// config.plugin('AddAssetHtmlWebpackPlugin').use(AddAssetHtmlPlugin, [
	//   {
	//     filepath: 'http://code.jquery.com/jquery-1.11.0.min.js',
	//   },
	// ]);
	config.plugin('HtmlWebpackPlugin').use(HtmlWebpackPlugin,[{
		env: process.env.NODE_ENV,
		filename: 'mika.html',
		template: 'mika.html',
		inject: true,
		minify: {
		  // removeComments: true,
		  collapseWhitespace: true,
		  // removeAttributeQuotes: true
		}
	}])
	config.plugin('MikaWebpackPlugin').use(MikaWebpackPlugin, [
	  {
	   options: {
	   }
	  },
	])
    // 删除进度条插件
    // config.plugins.delete('progress');
	// config.output.set('filename','pathdd.js');
	// config.output.filename('umi.js').libraryTarget('umd').library('_RUmi')
	// config.plugin('html').use(HtmlWebpackPlugin,[{
	// 	filename: 'public/index.html',
	// 	template: 'public/index.html',
	// 	inject: true,
	// 	minify: {
	// 	  removeComments: true,
	// 	  collapseWhitespace: true,
	// 	  removeAttributeQuotes: true
	// 	}
	//   }]);
	// config.plugin('html').tap(args => {
	// args[0].title = '';
	// args[0].APP_RELEASE_VERSION = 'v1.1.4.5.1.4';
	// return args;
	// });
  }
});
