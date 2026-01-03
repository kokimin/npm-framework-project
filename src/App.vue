<script setup>
/**
 * ============================================================================
 * @File         App.vue
 * @Description  App
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import { reactive, toRefs } from 'vue'
import { RouterView } from 'vue-router'
import HeaderView from '@components/header-view.vue'
import SideBarView from '@components/sideBar-view.vue'

/**
 * --------------------------------------------------------------------------
 * ▶ 변수 정의
 * --------------------------------------------------------------------------
 */
const data = reactive({
  subMenuInfo: {},
})
const { subMenuInfo } = toRefs(data)

/**
 * --------------------------------------------------------------------------
 * ▶ 이벤트 핸들러
 * --------------------------------------------------------------------------
 */
// gnb Menu Click
const gnbMenuClick = (menu) => {
  console.log(menu)
  subMenuInfo.value = menu
}
</script>

<template>
  <!-- s: header -->
  <header-view @gnbMenuClick="gnbMenuClick" />
  <!-- e: header -->
  <div class="body_container">
    <side-bar-view :subMenuInfo="subMenuInfo" />
    <RouterView />
  </div>
</template>

<style>
/* vue-multiselect
--------------------------*/
.multiselect {
  min-height: 24px;
  color: #1D1D1D;
}

.multiselect__tag {
  position: relative;
  display: inline-block;
  padding: 4px 26px 4px 10px;
  border-radius: 5px;
  margin-right: 10px;
  color: #fff;
  line-height: 1;
  background: #41b883;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
}

.multiselect, .multiselect__input, .multiselect__single {
  font-size: 12px;
}

.multiselect__select {
  width: 30px;
  height: 24px;
}

.multiselect__input, .multiselect__single {
  min-height: 24px;
  line-height: 24px;
  margin-bottom: 0 !important;
}

.multiselect__tags {
  min-height: 24px;
  padding: 0px 32px 0 6px;
  font-size: 12px;
  border-radius: 0;
  border: transparent;
}

.multiselect__tag {
  padding: 5px 26px 3px 10px;
  margin-right: 5px;
  margin-bottom: 0;
  margin-top: 2px;
  background: var(--secondary) !important;
}

.multiselect__tag-icon::after {
  color: #fff;
  font-size: 16px !important;
}

.multiselect__option {
  min-height: 28px !important;
  line-height: 10px !important;
}

.multiselect__content-wrapper {
  border: 1px solid #aaa !important;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  top: 30px;
}

.multiselect__option--highlight {
  background: var(--accent) !important;
  color: #fff !important;
}

.multiselect__option--highlight::after {
  background: var(--accent) !important;
  color: #fff !important;
}


.multiselect__option--selected {
  background: var(--primary) !important;
  color: #fff !important;
  font-weight: 400 !important;
}


.multiselect__option--selected.multiselect__option--highlight {
  background: var(--primary) !important;
  color: #fff !important;
}

.multiselect__option--selected.multiselect__option--highlight::after {
  background: var(--primary) !important;
  color: #fff !important;
}


/*.multiselect {
  color: #1D1D1D !important;
  min-height: 26px !important;
}

.multiselect__select {
  width: 30px !important;
  height: 26px !important;
}

.multiselect__placeholder {
  margin-bottom: 0 !important;
  color: #C5C5C5;
  padding-top: 0 !important;
  height: 26px !important;
  line-height: 24px !important;
}

.multiselect, .multiselect__input, .multiselect__single {
  font-size: 12px !important;
}

.multiselect__single {
  margin-bottom: 0 !important;
}

.multiselect__input, .multiselect__single {
  min-height: 24px !important;
  line-height: 24px !important;
  !*padding-top: 2px !important;*!
}

.multiselect__content-wrapper {
  border: 1px solid #aaa !important;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  top: 27px;
}

.multiselect__tags {
  min-height: 26px !important;
  border-radius: 0 !important;
  border: transparent !important;
  font-size: 12px !important;
  padding: 0 40px 0 8px !important;
}

.multiselect__tag {
  padding: 3px 26px 3px 10px !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  margin-right: 5px !important;
  border-radius: 2px !important;
  background: var(--accent) !important;
  height: 22px;
  line-height: 18px;
}

.multiselect__tag-icon {
  line-height: 23px !important;
}

.multiselect__tag-icon::after {
  content: "×";
  color: var(--secondary) !important;
  font-size: 16px !important;
}

.multiselect__option {
  min-height: 28px !important;
  line-height: 10px !important;
}


.multiselect__option--highlight {
  background: #f5f3ff !important;
  color: #4B4B4B !important;
}

.multiselect__option--highlight::after {
  background: #f5f3ff !important;
  color: #4B4B4B !important;
}


.multiselect__option--selected {
  background: var(--accent) !important;
  color: #fff !important;
  font-weight: 400 !important;
}


.multiselect__option--selected.multiselect__option--highlight {
  background: var(--accent) !important;
  color: #fff !important;
}

.multiselect__option--selected.multiselect__option--highlight::after {
  background: var(--accent) !important;
  color: #fff !important;
}*/
</style>
