<script setup>
/**
 * ============================================================================
 * @File         Alert
 * @Description  Alert Sample
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { reactive, toRefs } from 'vue';
import _utils from '@kokimin/utils';

import ContainerView from '@components/container-view.vue';
import FormContainer from '@components/form-container.vue';
import PopupContainer from '@components/popup-container.vue';
import { ElementButton } from '@kokimin/vue-framework';

/**
 * --------------------------------------------------------------------------
 * ▶ 변수 정의
 * --------------------------------------------------------------------------
 */
const data = reactive({
  isPopup: false,
});

const { isPopup } = toRefs(data);

/**
 * --------------------------------------------------------------------------
 * ▶ 이벤트 핸들러
 * --------------------------------------------------------------------------
 */
const alertClickHandler = () => {
  _utils.alert('', 'content');
};

const confirmClickHandler = () => {
  _utils.confirm('title', 'content');
};

const toastSuccessClickHandler = () => {
  _utils.toastSuccess('title', 'content');
};

const toastErrorClickHandler = () => {
  _utils.toastError('title', 'content');
};

const popupClickHandler = () => {
  isPopup.value = true;
};
</script>

<template>
  <container-view>
    <form-container title="Alert">
      <template #colgroup>
        <col style="width: 150px" />
        <col style="width: auto" />
      </template>
      <tbody>
        <tr>
          <th>alert</th>
          <td>
            <element-button @click="alertClickHandler">alert</element-button>
          </td>
        </tr>
        <tr>
          <th>confirm</th>
          <td>
            <element-button @click="confirmClickHandler">confirm</element-button>
          </td>
        </tr>
      </tbody>
    </form-container>
    <br />
    <br />

    <form-container title="Toast">
      <template #colgroup>
        <col style="width: 150px" />
        <col style="width: auto" />
      </template>
      <tbody>
        <tr>
          <th>Toast : Success</th>
          <td><element-button @click="toastSuccessClickHandler">Success</element-button></td>
        </tr>
        <tr>
          <th>Toast : Error</th>
          <td><element-button @click="toastErrorClickHandler">Error</element-button></td>
        </tr>
      </tbody>
    </form-container>
    <br />
    <br />

    <form-container title="Popup">
      <template #colgroup>
        <col style="width: 150px" />
        <col style="width: auto" />
      </template>
      <tbody>
        <tr>
          <th>Popup</th>
          <td><element-button @click="popupClickHandler">Popup</element-button></td>
        </tr>
      </tbody>
    </form-container>
  </container-view>

  <popup-container v-if="isPopup" v-model="isPopup" title="Popup Title">
    Popup Content
  </popup-container>
</template>
