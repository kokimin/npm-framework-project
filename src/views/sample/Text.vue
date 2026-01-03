<script setup>
/**
 * ============================================================================
 * @File         Text
 * @Description  Text Sample
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { reactive, toRefs } from 'vue';
import ContainerView from '@components/container-view.vue';
import FormContainer from '@components/form-container.vue';
import { ElementText, ElementTooltip } from '@kokimin/vue-framework';

/**
 * --------------------------------------------------------------------------
 * ▶ 변수 정의
 * --------------------------------------------------------------------------
 */
const data = reactive({
  text: '',
});
const { text } = toRefs(data);
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
            <element-text v-model="text" />
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
            <element-text v-model="text" :isClear="false" />
          </td>
        </tr>
        <tr>
          <th>
            placeholder
            <element-tooltip
              msg="placeholder='text를 입력해 주세요.'"
              :isHover="false"
              className="tooltip_info"
            >
              <span class="ico_info"></span>
            </element-tooltip>
          </th>
          <td><element-text v-model="text" placeholder="text를 입력해 주세요." /></td>
        </tr>
        <tr>
          <th>
            Readonly
            <element-tooltip msg="readonly" :isHover="false" className="tooltip_info">
              <span class="ico_info"></span>
            </element-tooltip>
          </th>
          <td>
            <element-text v-model="text" readonly />
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
            <element-text v-model="text" disabled />
          </td>
        </tr>
        <tr>
          <th>
            Text MaxLength
            <element-tooltip
              msg="maxLenType='text' :maxLength='5'"
              :isHover="false"
              className="tooltip_info"
            >
              <span class="ico_info"></span>
            </element-tooltip>
          </th>
          <td>
            <element-text v-model="text" maxLenType="text" :maxLength="5" />
          </td>
        </tr>
        <tr>
          <th>
            Byte MaxLength
            <element-tooltip
              msg="maxLenType='byte' :maxLength='6'"
              :isHover="false"
              className="tooltip_info"
            >
              <span class="ico_info"></span>
            </element-tooltip>
          </th>
          <td>
            <element-text v-model="text" maxLenType="byte" :maxLength="6" />
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
              msg="name='이름' rules='required'"
              :isHover="false"
              className="tooltip_info"
            >
              <span class="ico_info"></span>
            </element-tooltip>
          </th>
          <td>
            <element-text v-model="text" name="이름" rules="required" />
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
            <element-text v-model="text" name="이름" immediate rules="required" />
          </td>
        </tr>
      </tbody>
    </form-container>
  </container-view>
</template>
