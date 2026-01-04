<script setup>
/**
 * ============================================================================
 * @File         login
 * @Description  로그인 페이지
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { reactive, toRefs } from 'vue';
import _utils from '@kokimin/utils';
import { ElementButton, ElementCheckbox, ElementText } from '@kokimin/vue-framework';
import router from '@router/index.js';

/**
 * --------------------------------------------------------------------------
 * ▶ 변수 정의
 * --------------------------------------------------------------------------
 */
const data = reactive({
  userId: 'admin',
  userPw: 'admin',
  isChecked: false,
});

const { userId, userPw, isChecked } = toRefs(data);

/**
 * --------------------------------------------------------------------------
 * ▶ 이벤트 핸들러
 * --------------------------------------------------------------------------
 */
const loginClickHandler = () => {
  if (!userId.value) {
    _utils.alert('', '아이디를 입력해주세요.');
    return;
  }
  if (!userPw.value) {
    _utils.alert('', '비밀번호를 입력해주세요.');
    return;
  }

  router.push({ name: 'dashboard' }).catch(() => {});
};
</script>
<template>
  <main class="login_wrap">
    <div class="login">
      <h1>NPM FRAMEWORK PROJECT</h1>
      <div style="margin-bottom: 20px">
        <element-text v-model="userId" placeholder="아이디를 입력해주세요." />
      </div>
      <div style="margin-bottom: 20px">
        <element-text v-model="userPw" type="password" placeholder="비밀번호를 입력해주세요." />
      </div>
      <div class="login_option">
        <element-checkbox v-model="isChecked" label="아이디 저장" />
        <div class="other">
          <a>아이디 찾기</a>
          <a>비밀번호 찾기</a>
        </div>
      </div>
      <element-button className="btn_login" @click="loginClickHandler"> 로그인 </element-button>
    </div>
    <footer-view />
  </main>
</template>
