<script setup>
/**
 * ============================================================================
 * @File         SearchBox
 * @Description  SearchBox Sample
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { reactive, toRefs } from 'vue';
import ContainerView from '@components/container-view.vue';
import SearchContainer from '@components/search-container.vue';
import { ElementCheckbox, ElementDatePicker, ElementDateRangePicker, ElementMultiCheckbox, ElementNumber,
  ElementRadio, ElementSelect, ElementText, ElementToggle } from '@kokimin/vue-framework';

/**
 * --------------------------------------------------------------------------
 * ▶ 변수 정의
 * --------------------------------------------------------------------------
 */
const data = reactive({
  search: {},
  options: [
    { label: 'test1', value: '1' },
    { label: 'test2', value: '2' },
  ],
  text: '',
  number: '',
  select: '',
  multiSelect: '',
  datePicker: '',
  dateRangePicker: [],
  radio: '',
  checkBox: false,
  multiCheckBox: [],
  toggle: false,
});

const {
  search,
  options,
  text,
  number,
  select,
  multiSelect,
  datePicker,
  dateRangePicker,
  radio,
  checkBox,
  multiCheckBox,
  toggle,
} = toRefs(data);

/**
 * --------------------------------------------------------------------------
 * ▶ 이벤트 핸들러
 * --------------------------------------------------------------------------
 */
// 검색 초기화
const resetHandler = () => {
  search.value = {
    idName: '',
  };
};

// Init
const init = async () => {};

const searchHandler = async () => {
  console.log('searchHandler');
};
</script>

<template>
  <container-view>
    <!-- s: search -->
    <h3>검색영역 한줄, 검색버튼</h3>
    <search-container @search="searchHandler">
      <template #colgroup>
        <col style="width: 150px" />
        <col style="width: auto" />
        <col style="width: 150px" />
        <col style="width: auto" />
        <col style="width: 150px" />
        <col style="width: auto" />
      </template>
      <tbody>
        <tr>
          <th>Text : 에러</th>
          <td>
            <element-text v-model="text" name="이름" rules="required" />
          </td>
          <th>Text : 삭제</th>
          <td>
            <element-text v-model="text" />
          </td>
          <th></th>
          <td></td>
        </tr>
      </tbody>
    </search-container>
    <br />

    <h3>검색영역 한줄, 검색버튼, 초기화버튼</h3>
    <search-container @search="searchHandler" @reset="resetHandler">
      <template #colgroup>
        <col style="width: 150px" />
        <col style="width: auto" />
        <col style="width: 150px" />
        <col style="width: auto" />
        <col style="width: 150px" />
        <col style="width: auto" />
      </template>
      <tbody>
        <tr>
          <th>Text : 에러</th>
          <td>
            <element-text v-model="text" name="이름" rules="required" />
          </td>
          <th>Text : 삭제</th>
          <td>
            <element-text v-model="text" />
          </td>
          <th></th>
          <td></td>
        </tr>
      </tbody>
    </search-container>
    <br />

    <h3>검색영역 두줄, 검색버튼, 초기화버튼</h3>
    <search-container @search="searchHandler" @reset="resetHandler">
      <template #colgroup>
        <col style="width: 150px" />
        <col style="width: auto" />
        <col style="width: 150px" />
        <col style="width: auto" />
        <col style="width: 150px" />
        <col style="width: auto" />
      </template>
      <tbody>
        <tr>
          <th>Text : 에러</th>
          <td>
            <element-text v-model="text" name="이름" rules="required" />
          </td>
          <th>Text : 삭제</th>
          <td>
            <element-text v-model="text" />
          </td>
          <th>Text : 에러+삭제</th>
          <td><element-text v-model="text" /></td>
        </tr>
        <tr>
          <th>Select</th>
          <td>
            <element-select v-model="select" :options="options" />
          </td>
          <th>Multi Select</th>
          <td>
            <element-select v-model="multiSelect" type="multiple" :options="options" />
          </td>
          <th></th>
          <td></td>
        </tr>
      </tbody>
    </search-container>
    <br />

    <h3>검색영역 숨김/펼침, 검색버튼, 초기화버튼</h3>
    <search-container @search="searchHandler" @reset="resetHandler">
      <template #colgroup>
        <col style="width: 150px" />
        <col style="width: auto" />
        <col style="width: 150px" />
        <col style="width: auto" />
        <col style="width: 150px" />
        <col style="width: auto" />
      </template>
      <tbody>
        <tr>
          <th>Text : 에러</th>
          <td>
            <element-text v-model="text" name="이름" rules="required" />
          </td>
          <th>Text : 삭제</th>
          <td>
            <element-text v-model="text" />
          </td>
          <th>Text : 에러+삭제</th>
          <td><element-text v-model="text" /></td>
        </tr>
        <tr>
          <th>Select</th>
          <td>
            <element-select v-model="select" :options="options" />
          </td>
          <th>Multi Select</th>
          <td>
            <element-select v-model="multiSelect" type="multiple" :options="options" />
          </td>
          <th></th>
          <td></td>
        </tr>
      </tbody>
      <template #detailBody>
        <tr>
          <th>Radio</th>
          <td>
            <element-radio :options="options" v-model="radio" />
          </td>
          <th>CheckBox</th>
          <td>
            <element-checkbox v-model="checkBox" />
          </td>
          <th>Multi CheckBox</th>
          <td>
            <element-multi-checkbox :options="options" v-model="multiCheckBox" />
          </td>
        </tr>
        <tr>
          <th>Date Picker</th>
          <td>
            <element-date-picker v-model="datePicker" />
          </td>
          <th>Date Range Picker</th>
          <td colspan="3">
            <element-date-range-picker v-model="dateRangePicker" isMultiple />
          </td>
        </tr>
        <tr>
          <th>Number</th>
          <td>
            <element-number v-model="number" name="월급" rules="required" />
          </td>
          <th>Toggle</th>
          <td colspan="3"><element-toggle v-model="toggle" /></td>
        </tr>
      </template>
    </search-container>
  </container-view>
</template>
