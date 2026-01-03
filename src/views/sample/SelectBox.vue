<script setup>
/**
 * ============================================================================
 * @File         SelectBox
 * @Description  Select Sample
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { reactive, toRefs } from 'vue';
import ContainerView from '@components/container-view.vue';
import FormContainer from '@components/form-container.vue';
import { ElementSelect } from '@kokimin/vue-framework';

/**
 * --------------------------------------------------------------------------
 * ▶ 변수 정의
 * --------------------------------------------------------------------------
 */
const data = reactive({
  options: [
    { label: 'test1', value: '1' },
    { label: '한글', value: '2' },
    { label: '123', value: '3' },
  ],
  select: '',
  multiSelect: '',
});
const { options, select, multiSelect } = toRefs(data);
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
          <th>Select</th>
          <td>
            <element-select
              v-model="select"
              :options="options"
              name="날짜"
              immediate
              :isHover="false"
              rules="required"
            />
          </td>
        </tr>
        <tr>
          <th>Select</th>
          <td>
            <element-select v-model="select" :options="options" />
          </td>
        </tr>
        <tr>
          <th>Multi Select</th>
          <td>
            <element-select v-model="multiSelect" type="multiple" :options="options" />
          </td>
        </tr>
      </tbody>
    </form-container>
  </container-view>
</template>
