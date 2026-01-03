<script setup>
/**
 * ============================================================================
 * @File         Tooltip
 * @Description  Tooltip Sample
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import ContainerView from '@components/container-view.vue';
import FormContainer from '@components/form-container.vue';
import { ElementTooltip } from '@kokimin/vue-framework';
</script>

<template>
  <container-view>
    <form-container>
      <template #colgroup>
        <col style="width: 150px" />
        <col style="width: auto" />
      </template>
      <tbody>
        <tr>
          <th>hover</th>
          <td>
            <element-tooltip msg=":isHover='true'" className="tooltip_info">
              <span class="ico_info"></span>
            </element-tooltip>
          </td>
        </tr>
        <tr>
          <th>click</th>
          <td>
            <element-tooltip msg=":isHover='false'" :isHover="false" className="tooltip_info">
              <span class="ico_info"></span>
            </element-tooltip>
          </td>
        </tr>
      </tbody>
    </form-container>
  </container-view>
</template>
