/**
 * ============================================================================
 * @File         router
 * @Description  라우터 정보
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/searchBox',
    },
    {
      path: '/searchBox',
      name: 'searchBox',
      component: () => import('../views/sample/SearchBox.vue'),
    },
    {
      path: '/tab',
      name: 'tab',
      component: () => import('../views/sample/Tab.vue'),
    },
    {
      path: '/text',
      name: 'text',
      component: () => import('../views/sample/Text.vue'),
    },
    {
      path: '/number',
      name: 'number',
      component: () => import('../views/sample/Number.vue'),
    },
    {
      path: '/selectBox',
      name: 'selectBox',
      component: () => import('../views/sample/SelectBox.vue'),
    },
    {
      path: '/radioBox',
      name: 'radioBox',
      component: () => import('../views/sample/RadioBox.vue'),
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: () => import('../views/sample/Checkbox.vue'),
    },
    {
      path: '/toggle',
      name: 'toggle',
      component: () => import('../views/sample/Toggle.vue'),
    },
    {
      path: '/datePicker',
      name: 'datePicker',
      component: () => import('../views/sample/DatePicker.vue'),
    },
    {
      path: '/dateRangePicker',
      name: 'dateRangePicker',
      component: () => import('../views/sample/DateRangePicker.vue'),
    },
    {
      path: '/alert',
      name: 'alert',
      component: () => import('../views/sample/Alert.vue'),
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      component: () => import('../views/sample/Tooltip.vue'),
    },
  ],
});

export default router;
