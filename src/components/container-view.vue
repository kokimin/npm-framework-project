<script setup>
/**
 * ============================================================================
 * @File         container-view.vue
 * @Description  페이지 컨테이너 Layout
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { useRouter } from 'vue-router';
import FooterView from './footer-view.vue';

/**
 * --------------------------------------------------------------------------
 * ▶ 상수 정의
 * --------------------------------------------------------------------------
 */
const router = useRouter();
</script>

<template>
  <div class="flex_body">
    <main class="main_content">
      <!-- s: header title  -->
      <hgroup class="main_head">
        <h2>
          <span>{{ router.currentRoute.value.meta.title }} </span>
          <nav class="breadcrumb" aria-label="현재 위치">
            <ol>
              <li class="breadcrumb-item home">
                <a>
                  <span class="ico_home" aria-hidden="true"></span>
                </a>
              </li>

              <!--              <li
                :class="[
                  'breadcrumb-item',
                  router.currentRoute.value.meta.menuNavi.length - 1 === index ? 'current' : '',
                ]"
                v-for="(menu, index) in router.currentRoute.value.meta.menuNavi"
                :key="index"
              >
                <a>{{ menu }}</a>
              </li>-->
            </ol>
          </nav>
        </h2>
      </hgroup>
      <!-- e: header title -->
      <slot />
    </main>
    <footer-view />
  </div>
</template>
