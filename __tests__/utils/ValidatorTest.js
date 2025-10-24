import { NAME_LENGTH_ERROR } from '../../src/constants/constants';
import Validator from '../../src/utils/Validator.js';

describe('Validator 테스트', () => {
  describe('validateNames', () => {
    test('정상 통과', () => {
      expect(() => {
        Validator.validateNames(['a', 'b,', 'c']);
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
  });
});
