<script setup>
/**
 * ============================================================================
 * @File         sideBar-view.vue
 * @Description  사이드바 컴포넌트
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { reactive, toRefs } from 'vue';
import router from '../router/index.js';

/**
 * --------------------------------------------------------------------------
 * ▶ Props 정의
 * --------------------------------------------------------------------------
 */
const props = defineProps({
  subMenuInfo: {
    type: Object,
    default() {
      return {};
    },
  },
});

/**
 * --------------------------------------------------------------------------
 * ▶ 변수 정의
 * --------------------------------------------------------------------------
 */
const data = reactive({
  activeMenu: '',
});
const { activeMenu } = toRefs(data);

/**
 * --------------------------------------------------------------------------
 * ▶ 이벤트 핸들러
 * --------------------------------------------------------------------------
 */
// 메뉴 클릭 이벤트
const menuClick = (menu) => {
  activeMenu.value = menu.menuId;
  router.push({ name: menu.menuId }).catch(() => {});
};
</script>

<template>
  <aside class="aside">
    <div class="inner">
      <!-- .close 넣으면 자동으로 닫힙니다. -->
      <div class="row_menu" v-if="subMenuInfo">
        <h2>{{ subMenuInfo.menuNm }}</h2>
        <ul class="menu">
          <li
            v-for="menu in subMenuInfo.children"
            :key="menu.menuId"
            :class="[menu.menuId === activeMenu ? 'active' : '']"
          >
            <a class="m" @click="menuClick(menu)">{{ menu.menuNm }}</a>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>
