<script setup>
/**
 * ============================================================================
 * @File         Checkbox
 * @Description  Checkbox Sample
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { reactive, toRefs } from 'vue';
import ContainerView from '@components/container-view.vue';
import FormContainer from '@components/form-container.vue';
import { ElementCheckbox, ElementMultiCheckbox } from '@kokimin/vue-framework';

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
  checkBox: false,
  multiCheckBox: [],
});
const { options, checkBox, multiCheckBox } = toRefs(data);
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
          <th>CheckBox</th>
          <td>
            <element-checkbox v-model="checkBox" />
          </td>
        </tr>
        <tr>
          <th>Multi CheckBox</th>
          <td>
            <element-multi-checkbox :options="options" v-model="multiCheckBox" />
          </td>
        </tr>
      </tbody>
    </form-container>
  </container-view>
</template>
