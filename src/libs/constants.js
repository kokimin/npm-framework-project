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
    menuId: 'sample',
    menuNm: 'Component',
    parentMenuId: [],
    menuUrl: '',
    sort: '1',
    children: [
      {
        menuId: 'searchBox',
        menuNm: 'SearchBox',
        parentMenuId: ['sample', 'searchBox'],
        menuUrl: '/sample/searchBox',
        sort: '1',
        children: [],
      },
      {
        menuId: 'sampleMenu-navigation',
        menuNm: 'Navigation',
        parentMenuId: ['sample', 'sampleMenu-navigation'],
        menuUrl: '',
        sort: '2',
        children: [
          {
            menuId: 'tab',
            menuNm: 'Tab',
            parentMenuId: ['sample', 'sampleMenu-navigation', 'tab'],
            menuUrl: '/sample/tab',
            sort: '1',
            children: [],
          },
        ],
      },
      {
        menuId: 'sampleMenu-form',
        menuNm: 'Form',
        parentMenuId: ['sample', 'sampleMenu-date'],
        menuUrl: '',
        sort: '3',
        children: [
          {
            menuId: 'text',
            menuNm: 'Text',
            parentMenuId: ['sample', 'sampleMenu-form', 'text'],
            menuUrl: '/sample/text',
            sort: '1',
            children: [],
          },
          {
            menuId: 'number',
            menuNm: 'Number',
            parentMenuId: ['sample', 'sampleMenu-form', 'number'],
            menuUrl: '/sample/number',
            sort: '2',
            children: [],
          },
          {
            menuId: 'selectBox',
            menuNm: 'Select',
            parentMenuId: ['sample', 'sampleMenu-form', 'selectBox'],
            menuUrl: '/sample/select',
            sort: '3',
            children: [],
          },
          {
            menuId: 'radioBox',
            menuNm: 'Radio',
            parentMenuId: ['sample', 'sampleMenu-form', 'radioBox'],
            menuUrl: '/sample/radio',
            sort: '4',
            children: [],
          },
          {
            menuId: 'checkbox',
            menuNm: 'Checkbox',
            parentMenuId: ['sample', 'sampleMenu-form', 'checkbox'],
            menuUrl: '/sample/checkbox',
            sort: '5',
            children: [],
          },
          {
            menuId: 'toggle',
            menuNm: 'Toggle',
            parentMenuId: ['sample', 'sampleMenu-form', 'toggle'],
            menuUrl: '/sample/toggle',
            sort: '6',
            children: [],
          },
        ],
      },
      {
        menuId: 'sampleMenu-pickers',
        menuNm: 'Pickers',
        parentMenuId: ['sample', 'sampleMenu-pickers'],
        menuUrl: '',
        sort: '4',
        children: [
          {
            menuId: 'datePicker',
            menuNm: 'DatePicker',
            parentMenuId: ['sample', 'sampleMenu-pickers', 'datePicker'],
            menuUrl: '/sample/datePicker',
            sort: '1',
            children: [],
          },
          {
            menuId: 'dateRangePicker',
            menuNm: 'DateRangePicker',
            parentMenuId: ['sample', 'sampleMenu-pickers', 'dateRangePicker'],
            menuUrl: '/sample/dateRangePicker',
            sort: '2',
            children: [],
          },
        ],
      },
      {
        menuId: 'sampleMenu-containment',
        menuNm: 'Containment',
        parentMenuId: ['sample', 'sampleMenu-containment'],
        menuUrl: '',
        sort: '5',
        children: [
          {
            menuId: 'alert',
            menuNm: 'Alert',
            parentMenuId: ['sample', 'sampleMenu-containment', 'alert'],
            menuUrl: '/sample/alert',
            sort: '1',
            children: [],
          },
          {
            menuId: 'tooltip',
            menuNm: 'Tooltip',
            parentMenuId: ['sample', 'sampleMenu-containment', 'tooltip'],
            menuUrl: '/sample/tooltip',
            sort: '2',
            children: [],
          },
        ],
      },
    ],
  },
];
