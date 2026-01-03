<script setup>
/**
 * ============================================================================
 * @File         popup-container.vue
 * @Description  popup Layout
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */

/**
 * --------------------------------------------------------------------------
 * ▶ Props 정의
 * --------------------------------------------------------------------------
 */
const props = defineProps({
  modelValue: {
    type: Boolean,
  },
  popupId: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  popupSize: {
    type: String,
    default: 'full-width',
  },
});

/**
 * --------------------------------------------------------------------------
 * ▶ Emits 정의
 * --------------------------------------------------------------------------
 */
const emit = defineEmits(['update:modelValue']);

/**
 * --------------------------------------------------------------------------
 * ▶ 이벤트 핸들러
 * --------------------------------------------------------------------------
 */
// 닫기 클릭
const closeClick = () => {
  emit('update:modelValue', false);
};
</script>

<template>
  <div class="popup_wrap lg">
    <!-- full -->
    <section class="popup">
      <div class="popup_inner">
        <h2 class="popup_hd">{{ title }}</h2>
        <div class="popup_body">
          <div class="popup_content">
            <slot :popupId="popupId" :closeClick="closeClick" />
          </div>
        </div>
        <div class="util">
          <button type="button" class="btn_full">
            <span class="hide">전체화면</span>
          </button>
          <button type="button" class="btn_close" @click="closeClick">
            <span class="hide">닫기</span>
          </button>
        </div>
      </div>
    </section>
  </div>

  <!-- s: dimmed -->
  <div class="dimmed"></div>
  <!-- e: dimmed -->
</template>
