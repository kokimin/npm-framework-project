/**
 * ============================================================================
 * @File         veeValidate.js
 * @Description  Validate 함수 모음
 * @Author       kokimin
 * @Created      2025.05.01
 * ============================================================================
 */
import * as rules from '@vee-validate/rules';
import { defineRule } from 'vee-validate';

// 모든 기본 rule 등록
Object.keys(rules).forEach((rule) => {
  if (typeof rules[rule] === 'function') {
    defineRule(rule, rules[rule]);
  }
});

// 전화번호 정규체크 (커스텀 rule)
defineRule('tel', (value) => {
  const regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;

  if (!regExp.test(value)) {
    return '전화번호를 정확히 입력해주세요.';
  }

  return true;
});
