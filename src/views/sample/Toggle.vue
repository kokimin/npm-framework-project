<script setup>
/**
 * ============================================================================
 * @File         Toggle
 * @Description  Toggle Sample
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { reactive, toRefs } from 'vue';
import ContainerView from '@components/container-view.vue';
import FormContainer from '@components/form-container.vue';
import { ElementToggle } from '@kokimin/vue-framework';

/**
 * --------------------------------------------------------------------------
 * ▶ 변수 정의
 * --------------------------------------------------------------------------
 */
const data = reactive({
  toggle: false,
});
const { toggle } = toRefs(data);
</script>

<template>
  <container-view>
    <form-container title="기본설정">
      <template #colgroup>
        <col style="width: 150px" />
        <col style="width: auto" />
      </template>
      <tbody>
        <tr>
          <th>Toggle</th>
          <td colspan="3"><element-toggle v-model="toggle" /></td>
        </tr>
      </tbody>
    </form-container>
  </container-view>
</template>
