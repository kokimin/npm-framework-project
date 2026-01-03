<script setup>
/**
 * ============================================================================
 * @File         form-container.vue
 * @Description  테이블 컨테이너 Layout
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
  title: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="info_form">
    <h3 v-if="title">{{ title }}</h3>
    <table>
      <colgroup>
        <slot name="colgroup"></slot>
      </colgroup>
      <slot></slot>
    </table>
  </div>
</template>
