<script setup>
/**
 * ============================================================================
 * @File         DatePicker
 * @Description  DatePicker Sample
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { reactive, toRefs } from 'vue';
import ContainerView from '@components/container-view.vue';
import FormContainer from '@components/form-container.vue';
import { ElementDatePicker, ElementTooltip } from '@kokimin/vue-framework';

/**
 * --------------------------------------------------------------------------
 * ▶ 변수 정의
 * --------------------------------------------------------------------------
 */
const data = reactive({
  inputDay: '',
  inputYear: '',
  inputMonth: '',
});
const { inputDay, inputYear, inputMonth } = toRefs(data);
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
            <element-date-picker v-model="inputDay" />
          </td>
        </tr>
        <tr>
          <th>Text 수정여부</th>
          <td>
            <element-date-picker v-model="inputDay" isTextInput />
          </td>
        </tr>
        <tr>
          <th>
            Disabled
            <element-tooltip msg="disabled" :isHover="false" className="tooltip_info">
              <span class="ico_info"></span>
            </element-tooltip>
          </th>
          <td>
            <element-date-picker v-model="inputDay" disabled />
          </td>
        </tr>
        <tr>
          <th>Year Picker</th>
          <td>
            <element-date-picker v-model="inputYear" type="year" />
          </td>
        </tr>
        <tr>
          <th>Month Picker</th>
          <td>
            <element-date-picker v-model="inputMonth" type="month" />
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
            필수값
            <element-tooltip
              msg="name='날짜 rules='required'"
              :isHover="false"
              className="tooltip_info"
            >
              <span class="ico_info"></span>
            </element-tooltip>
          </th>
          <td>
            <element-date-picker v-model="inputDay" name="날짜" rules="required" />
          </td>
        </tr>
        <tr>
          <th>
            초기에 유효성 검사
            <element-tooltip msg=":immediate='true'" :isHover="false" className="tooltip_info">
              <span class="ico_info"></span>
            </element-tooltip>
          </th>
          <td>
            <element-date-picker v-model="inputDay" name="날짜" immediate rules="required" />
          </td>
        </tr>
      </tbody>
    </form-container>
  </container-view>
</template>
