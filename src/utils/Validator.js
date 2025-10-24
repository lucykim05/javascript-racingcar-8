import {
  COUNT_VALUE_ERROR,
  NAME_LENGTH_ERROR,
} from '../constants/constants.js';

class Validator {
  static validateNames(names) {
    if (names.some((name) => name.length === 0 || name.length > 5)) {
      throw new Error(NAME_LENGTH_ERROR);
    }
  }

  static validateCount(count) {
    if (isNaN(count) || count <= 0) {
      throw new Error(COUNT_VALUE_ERROR);
    }
  }
}

export default Validator;
