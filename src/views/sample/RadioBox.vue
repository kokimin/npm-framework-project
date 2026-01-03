<script setup>
/**
 * ============================================================================
 * @File         RadioBox
 * @Description  Radio Sample
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { reactive, toRefs } from 'vue';

import ContainerView from '@components/container-view.vue';
import FormContainer from '@components/form-container.vue';
import { ElementRadio } from '@kokimin/vue-framework';

/**
 * --------------------------------------------------------------------------
 * ▶ 변수 정의
 * --------------------------------------------------------------------------
 */
const data = reactive({
  options: [
    { label: 'test1', value: '1' },
    { label: 'test2', value: '2' },
  ],
  radio: '',
});
const { options, radio } = toRefs(data);
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
          <th>Radio</th>
          <td>
            <element-radio :options="options" v-model="radio" />
          </td>
        </tr>
      </tbody>
    </form-container>
  </container-view>
</template>
