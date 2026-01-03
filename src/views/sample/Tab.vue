<script setup>
/**
 * ============================================================================
 * @File         Tab
 * @Description  Tab Sample
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { reactive, toRefs } from 'vue';
import ContainerView from '@components/container-view.vue';
import { ElementTab } from '@kokimin/vue-framework';

/**
 * --------------------------------------------------------------------------
 * ▶ 변수 정의
 * --------------------------------------------------------------------------
 */
const data = reactive({
  tabId: 'app',
  tabs: [
    { label: '앱관리', value: 'app' },
    { label: '앱인증서 관리', value: 'cert' },
    { label: '알림함 관리', value: 'msgbox' },
    { label: '발송구분 관리', value: 'category' },
  ],
});
const { tabId, tabs } = toRefs(data);
</script>

<template>
  <container-view>
    <!-- s: tab -->
    <element-tab v-model="tabId" :options="tabs"></element-tab>
    <!-- e: tab -->
  </container-view>
</template>
