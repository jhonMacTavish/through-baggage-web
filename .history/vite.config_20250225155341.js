/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-02-23 17:18:54
 * @LastEditors: john_mactavish 981192661@qq.com
 * @LastEditTime: 2025-02-25 15:53:40
 * @FilePath: \through_baggage_webt:\Projects\VS Code\vue-bootstrap-master\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(), // 使用 vue() 插件
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon', // 配置图标前缀
        }),
      ],
    }),
    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ['ep'], // 只启用 'ep' 图标集
        }),
        ElementPlusResolver(),
      ],
      directoryAsNamespace: true, // 组件目录作为命名空间
    }),
    Icons({
      autoInstall: true, // 自动安装图标
      compiler: 'vue3',  // 设置 Vue 3 编译器
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    https: {
      key: fs.readFileSync('localhost+3-key.pem'),
      cert: fs.readFileSync('localhost+3.pem'),
    },
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        // target: 'http://10.33.160.1:8086',
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
        logLevel: 'debug',

        // '/api': {
        //   target: 'http://10.33.160.1:8086',
        //   secure: false,
        //   changeOrigin: true,
        //   pathRewrite: {
        //     '^/api': ''
        //   },
        //   logLevel: 'debug', // 开启调试日志
        onProxyReq: (proxyReq, req, res) => {
          console.log('Request URL:', req.url);  // 打印请求的路径
        }
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: true,
    sourcemap: false,

    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true
      }
    },

    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]'
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        // 可以在这里添加一些 Less 特定的配置
        modifyVars: {
          'primary-color': '#1DA57A', // 例：修改主题色
        },
        javascriptEnabled: true,
      },
    },
  }
})
