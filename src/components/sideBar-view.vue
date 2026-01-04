<script setup>
/**
 * ============================================================================
 * @File         sideBar-view.vue
 * @Description  사이드바 컴포넌트
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { computed, inject, reactive, toRefs } from 'vue';
import router from '../router/index.js';

/**
 * --------------------------------------------------------------------------
 * ▶ Emitter 정의
 * --------------------------------------------------------------------------
 */
const emitter = inject('emitter');

/**
 * --------------------------------------------------------------------------
 * ▶ 변수 정의
 * --------------------------------------------------------------------------
 */
const data = reactive({
  menuInfo: {},
  activeMenuInfo: {},
  openSubMenuIds: [],
});

const { menuInfo, activeMenuInfo, openSubMenuIds } = toRefs(data);

// 메뉴 정보가 있는지 확인
const hasMenuInfo = computed(() => menuInfo.value && Object.keys(menuInfo.value).length > 0);

/**
 * --------------------------------------------------------------------------
 * ▶ 이벤트 핸들러
 * --------------------------------------------------------------------------
 */
// GNB 메뉴 클릭 이벤트 리스너
emitter.on('mittGnbMenuClickEvent', (menu) => {
  menuInfo.value = menu;
  openSubMenuIds.value = []; // 새 메뉴 선택 시 서브메뉴 초기화
});

// 서브메뉴 토글
const toggleSubMenu = (menuId) => {
  const index = openSubMenuIds.value.indexOf(menuId);
  if (index > -1) {
    openSubMenuIds.value.splice(index, 1);
  } else {
    openSubMenuIds.value.push(menuId);
  }
};

// 메뉴 네비게이션
const navigateToMenu = (menu) => {
  activeMenuInfo.value = menu;
  router.push({ name: menu.menuId }).catch(() => {});
};

// 메뉴 클릭 이벤트
const menuClick = (menu) => {
  const hasChildren = menu.children && menu.children.length > 0;

  if (hasChildren) {
    toggleSubMenu(menu.menuId);
  } else {
    navigateToMenu(menu);
  }
};

// 메뉴 활성화 상태 확인
const isMenuActive = (menuId) => menuId === activeMenuInfo.value.menuId;

// 서브메뉴 열림 상태 확인
const isSubMenuOpen = (menuId) => openSubMenuIds.value.includes(menuId);
</script>

<template>
  <aside class="aside">
    <div class="inner">
      <div v-if="hasMenuInfo" class="row_menu">
        <h2>{{ menuInfo.menuNm }}</h2>

        <ul class="menu">
          <li
            v-for="menu in menuInfo.children"
            :key="menu.menuId"
            :class="{
              active: isMenuActive(menu.menuId),
              open: isSubMenuOpen(menu.menuId),
            }"
          >
            <a class="m" @click="menuClick(menu)">
              {{ menu.menuNm }}
            </a>

            <ul v-if="menu.children?.length" class="sub2">
              <li
                v-for="subMenu in menu.children"
                :key="subMenu.menuId"
                :class="{ active: isMenuActive(subMenu.menuId) }"
              >
                <a @click="menuClick(subMenu)">
                  {{ subMenu.menuNm }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>
