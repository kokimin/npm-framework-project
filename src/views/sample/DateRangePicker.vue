<script setup>
/**
 * ============================================================================
 * @File         DateRangePicker
 * @Description  DateRangePicker Sample
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { reactive, toRefs } from 'vue';
import ContainerView from '@components/container-view.vue';
import FormContainer from '@components/form-container.vue';
import { ElementDateRangePicker, ElementTooltip } from '@kokimin/vue-framework';

/**
 * --------------------------------------------------------------------------
 * ▶ 변수 정의
 * --------------------------------------------------------------------------
 */
const data = reactive({
  inputRage: [],
});
const { inputRage } = toRefs(data);
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
          <th>Default</th>
          <td>
            <element-date-range-picker v-model="inputRage" />
          </td>
        </tr>
      </tbody>
    </form-container>
    <br />
    <br />
    <form-container title="Validate 설정">
      <template #colgroup>
        <col style="width: 150px" />
        <col style="width: auto" />
      </template>
      <tbody>
        <tr>
          <th>
            초기에 유효성 검사
            <element-tooltip msg=":immediate='true'" :isHover="false" className="tooltip_info">
              <span class="ico_info"></span>
            </element-tooltip>
          </th>
          <td>
            <element-date-range-picker v-model="inputRage" name="날짜" immediate rules="required" />
          </td>
        </tr>
      </tbody>
    </form-container>
  </container-view>
</template>
