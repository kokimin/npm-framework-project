<script setup>
/**
 * ============================================================================
 * @File         Number
 * @Description  Number Sample
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { reactive, toRefs } from 'vue';

import ContainerView from '@components/container-view.vue';
import FormContainer from '@components/form-container.vue';
import { ElementNumber, ElementTooltip } from '@kokimin/vue-framework';

/**
 * --------------------------------------------------------------------------
 * ▶ 변수 정의
 * --------------------------------------------------------------------------
 */
const data = reactive({
  number: '',
});
const { number } = toRefs(data);
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
            <element-number v-model="number" />
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
            <element-number v-model="number" disabled />
          </td>
        </tr>
        <tr>
          <th>
            Readonly
            <element-tooltip msg="readonly" :isHover="false" className="tooltip_info">
              <span class="ico_info"></span>
            </element-tooltip>
          </th>
          <td>
            <element-number v-model="number" readonly />
          </td>
        </tr>
        <tr>
          <th>
            Clear 버튼 Off
            <element-tooltip msg=":isClear='false'" :isHover="false" className="tooltip_info">
              <span class="ico_info"></span>
            </element-tooltip>
          </th>
          <td>
            <element-number v-model="number" :isClear="false" />
          </td>
        </tr>
        <tr>
          <th>
            앞에 놓인 문자
            <element-tooltip msg="prefix='$'" :isHover="false" className="tooltip_info">
              <span class="ico_info"></span>
            </element-tooltip>
          </th>
          <td>
            <element-number v-model="number" prefix="$" />
          </td>
        </tr>
        <tr>
          <th>
            뒤에 놓인 문자
            <element-tooltip msg="suffix='원'" :isHover="false" className="tooltip_info">
              <span class="ico_info"></span>
            </element-tooltip>
          </th>
          <td>
            <element-number v-model="number" suffix="원" />
          </td>
        </tr>
        <tr>
          <th>
            소수점 2자리
            <element-tooltip msg=":precision='2'" :isHover="false" className="tooltip_info">
              <span class="ico_info"></span>
            </element-tooltip>
          </th>
          <td>
            <element-number v-model="number" precision="2" />
          </td>
        </tr>
        <tr>
          <th>
            최소값 10
            <element-tooltip msg=":min=10" :isHover="false" className="tooltip_info">
              <span class="ico_info"></span>
            </element-tooltip>
          </th>
          <td>
            <element-number v-model="number" :min="10" />
          </td>
        </tr>
        <tr>
          <th>
            최대값 1000
            <element-tooltip msg=":max=1000" :isHover="false" className="tooltip_info">
              <span class="ico_info"></span>
            </element-tooltip>
          </th>
          <td>
            <element-number v-model="number" :max="1000" />
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
              msg="name='금액 rules='required'"
              :isHover="false"
              className="tooltip_info"
            >
              <span class="ico_info"></span>
            </element-tooltip>
          </th>
          <td>
            <element-number v-model="number" name="금액" rules="required" />
          </td>
        </tr>
        <tr>
          <th>
            초기에 유효성 검사
            <element-tooltip msg="immediate" :isHover="false" className="tooltip_info">
              <span class="ico_info"></span>
            </element-tooltip>
          </th>
          <td>
            <element-number v-model="number" name="금액" immediate rules="required" />
          </td>
        </tr>
      </tbody>
    </form-container>
  </container-view>
</template>
