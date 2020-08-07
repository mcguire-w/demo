// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  accessLayout: {
    useModel: true,
  },
  // 这里的逻辑会在 pro-reset 中实现，先放这里防止程序运行出错
  define: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: '',
    REACT_APP_ENV: REACT_APP_ENV || false,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  nodeModulesTransform: {
    type: 'none'
  },
  // layout: {},
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      exact: true,
      path: '/',
      redirect: '/home'
    },
    {
      exact: true,
      path: '/home',
      component: './home',
      icon: 'project',
      name: '首页'
    },
    {
      exact: true,
      path: '/chart',
      component: './chart',
      icon: 'areaChart',
      name: '图表'
    },
    {
      exact: true,
      path: '/setting',
      component: './setting',
      icon: 'control',
      name: '设置'
    },
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
