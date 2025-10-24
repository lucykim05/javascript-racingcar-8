import {
  COUNT_VALUE_ERROR,
  NAME_DUPLICATE_ERROR,
  NAME_LENGTH_ERROR,
} from '../../src/constants/constants';
import Validator from '../../src/utils/Validator.js';

describe('Validator 테스트', () => {
  describe('validateNames', () => {
    test('정상 통과', () => {
      expect(() => {
        Validator.validateNames(['a', 'b', 'c']);
      }).not.toThrow();
    });

    test('빈 이름이 있으면 에러 발생', () => {
      expect(() => {
        Validator.validateNames(['a', '', 'b']);
      }).toThrow(NAME_LENGTH_ERROR);
    });

    test('5글자 초과 이름이 있으면 에러 발생', () => {
      expect(() => {
        Validator.validateNames(['abcdef', 'abcde', 'a']);
      }).toThrow(NAME_LENGTH_ERROR);
    });

    test('5글자 통과', () => {
      expect(() => {
        Validator.validateNames(['abcde']);
      }).not.toThrow();
    });

    test('중복된 이름이 있으면 에러 발생', () => {
      expect(() => {
        Validator.validateNames(['a', 'a', 'b']);
      }).toThrow(NAME_DUPLICATE_ERROR);
    });
  });

  describe('validateCount', () => {
    test('정상적인 숫자 통과', () => {
      expect(() => {
        Validator.validateCount(5);
      }).not.toThrow();
    });

    test('최소값 미만이면 에러 발생', () => {
      expect(() => {
        Validator.validateCount(0);
      }).toThrow(COUNT_VALUE_ERROR);
    });

    test('숫자가 아니면 에러', () => {
      expect(() => {
        Validator.validateCount('a');
      }).toThrow(COUNT_VALUE_ERROR);
    });
  });
});
