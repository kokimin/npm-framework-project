<script setup>
/**
 * ============================================================================
 * @File         App.vue
 * @Description  App
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { RouterView } from 'vue-router';
import HeaderView from '@components/header-view.vue';
import SideBarView from '@components/sideBar-view.vue';
</script>

<template>
  <RouterView v-if="$route.name === 'login'" />
  <template v-else>
    <!-- s: header -->
    <header-view />
    <!-- e: header -->
    <div class="body_container">
      <side-bar-view />
      <RouterView />
    </div>
  </template>
</template>
