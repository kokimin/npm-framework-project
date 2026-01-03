/**
 * ============================================================================
 * @File         constants.js
 * @Description  상수 모음
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */

/**
 * --------------------------------------------------------------------------
 * ▶ 변수 정의
 * --------------------------------------------------------------------------
 */

// 정규식 정보
export const _regexp = {
  comma: /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
  phone: /^(\d{2,3})-?(\d{3,4})-?(\d{4})$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

// 샘플 메뉴 정보
export const _sampleMenuList = [
  {
    menuId: 'searchBox',
    menuNm: 'SearchBox',
    menuUrl: '/searchBox',
    children: [],
  },
  {
    menuId: 'sampleMenu-navigation',
    menuNm: 'Navigation',
    menuUrl: '',
    children: [
      {
        menuId: 'tab',
        menuNm: '탭',
        menuUrl: '/tab',
        children: [],
      },
    ],
  },
  {
    menuId: 'sampleMenu-form',
    menuNm: 'Form',
    menuUrl: '',
    children: [
      {
        menuId: 'text',
        menuNm: '텍스트',
        menuUrl: '/text',
        children: [],
      },
      {
        menuId: 'number',
        menuNm: '숫자',
        menuUrl: '/number',
        children: [],
      },
      {
        menuId: 'selectBox',
        menuNm: '콤보',
        menuUrl: '/select',
        children: [],
      },
      {
        menuId: 'radioBox',
        menuNm: '라디오',
        menuUrl: '/radio',
        children: [],
      },
      {
        menuId: 'checkbox',
        menuNm: '체크박스',
        menuUrl: '/checkbox',
        children: [],
      },
      {
        menuId: 'toggle',
        menuNm: '토글',
        menuUrl: '/toggle',
        children: [],
      },
    ],
  },
  {
    menuId: 'sampleMenu-pickers',
    menuNm: 'Pickers',
    menuUrl: '',
    children: [
      {
        menuId: 'datePicker',
        menuNm: 'Date Picker',
        menuUrl: '/datePicker',
        children: [],
      },
      {
        menuId: 'dateRangePicker',
        menuNm: 'Date Range Picker',
        menuUrl: '/dateRangePicker',
        children: [],
      },
    ],
  },
  {
    menuId: 'sampleMenu-containment',
    menuNm: 'Containment',
    menuUrl: '',
    children: [
      {
        menuId: 'alert',
        menuNm: '경고',
        menuUrl: '/alert',
        children: [],
      },
      {
        menuId: 'tooltip',
        menuNm: '툴팁',
        menuUrl: '/tooltip',
        children: [],
      },
    ],
  },
];
