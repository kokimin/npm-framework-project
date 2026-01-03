<script setup>
/**
 * ============================================================================
 * @File         search-container.vue
 * @Description  검색 Layout
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { computed, getCurrentInstance, reactive, toRefs } from 'vue';
import { ElementButton } from '@kokimin/vue-framework';


/**
 * --------------------------------------------------------------------------
 * ▶ 상수 정의
 * --------------------------------------------------------------------------
 */
const internalInstance = getCurrentInstance();

/**
 * --------------------------------------------------------------------------
 * ▶ Emits 정의
 * --------------------------------------------------------------------------
 */
const emit = defineEmits(['reset', 'search']);

/**
 * --------------------------------------------------------------------------
 * ▶ 변수 정의
 * --------------------------------------------------------------------------
 */
const data = reactive({
  isShowDetail: false,
});
const { isShowDetail } = toRefs(data);

/**
 * --------------------------------------------------------------------------
 * ▶ Computed & Watch
 * --------------------------------------------------------------------------
 */
const hasSearchListener = computed(() => {
  return !!internalInstance?.vnode.props?.onSearch;
});

const hasResetListener = computed(() => {
  return !!internalInstance?.vnode.props?.onReset;
});
</script>

<template>
  <div class="search_form">
    <div class="search_option">
      <div class="row">
        <table>
          <colgroup>
            <slot name="colgroup"></slot>
          </colgroup>
          <slot></slot>
        </table>
      </div>
      <template v-if="$slots.detailBody">
        <div class="row" v-show="isShowDetail">
          <table>
            <colgroup>
              <slot name="colgroup"></slot>
            </colgroup>
            <tbody>
              <slot name="detailBody"></slot>
            </tbody>
          </table>
        </div>
      </template>
    </div>
    <div class="search_btn" v-if="hasSearchListener || hasResetListener">
      <div class="flod">
        <element-button v-if="hasSearchListener" @click="emit('search')" style="width: 100%">
          조회
        </element-button>
        <element-button
          v-if="hasResetListener"
          addClass="ico_reset"
          size="sm"
          @click="emit('reset')"
        >
          <span class="hide">dd</span>
        </element-button>
      </div>
      <div v-if="$slots.detailBody">
        <element-button addClass="ico_toggleOpen" size="sm" @click="isShowDetail = !isShowDetail">
          <span>상세 {{ isShowDetail ? '▲' : '▼' }}</span>
        </element-button>
      </div>
    </div>
  </div>
</template>
