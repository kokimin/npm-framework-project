<script setup>
/**
 * ============================================================================
 * @File         header-view.vue
 * @Description  상단 Layout
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { inject, reactive, toRefs } from 'vue';
import { ElementButton, ElementTooltip } from '@kokimin/vue-framework';
import router from '@router/index.js';
import { _sampleMenuList } from '@libs/constants.js';

/**
 * --------------------------------------------------------------------------
 * ▶ 상수 정의
 * --------------------------------------------------------------------------
 */
const emitter = inject('emitter');

/**
 * --------------------------------------------------------------------------
 * ▶ 변수 정의
 * --------------------------------------------------------------------------
 */
const data = reactive({
  activeGnb: '',
});
const { activeGnb } = toRefs(data);

/**
 * --------------------------------------------------------------------------
 * ▶ 이벤트 핸들러
 * --------------------------------------------------------------------------
 */
// Gnb 메뉴 클릭
const gnbMenuActiveClick = (menu) => {
  activeGnb.value = menu.menuId;
  emitter.emit('mittGnbMenuClickEvent', menu);
};

// 로그아웃
const logOutClick = () => {
  router.push({ name: 'login' }).catch(() => {});
};
</script>

<template>
  <header class="header_container">
    <nav class="gnb">
      <ul>
        <li
          v-for="(menu, index) in _sampleMenuList"
          :key="index"
          :class="activeGnb === menu.menuId ? 'active' : ''"
        >
          <a @click="gnbMenuActiveClick(menu)">{{ menu.menuNm }}</a>
        </li>
      </ul>
    </nav>
    <div class="util">
      <element-button className="btn_menu">
        <span class="hide">전체메뉴</span>
      </element-button>
      <element-button className="btn_alram">
        <span class="hide">알림</span>
        <span class="count">99</span>
      </element-button>
      <div class="account_wrap">
        <element-tooltip :isHover="false" placement="bottom-end">
          <element-button className="btn_account"> 고기민 </element-button>
          <template #detailBody>
            <div class="account_info">
              <p class="name">고기민</p>
              <p class="c_name">성헌소프트</p>
            </div>
            <ul class="account_menu">
              <li>
                <element-button className="btn_modify"> 개인정보수정 </element-button>
              </li>
              <li>
                <element-button className="btn_setting"> 설정 </element-button>
              </li>
              <li>
                <element-button className="btn_logout" @click="logOutClick()">
                  로그아웃
                </element-button>
              </li>
            </ul>
          </template>
        </element-tooltip>
      </div>
    </div>
  </header>
</template>
