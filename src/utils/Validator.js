import {
  COUNT_MIN,
  COUNT_VALUE_ERROR,
  NAME_DUPLICATE_ERROR,
  NAME_LENGTH_ERROR,
  NAME_MAX_LENGTH,
} from '../constants/constants.js';

class Validator {
  static validateNames(names) {
    if (
      names.some((name) => name.length === 0 || name.length > NAME_MAX_LENGTH)
    ) {
      throw new Error(NAME_LENGTH_ERROR);
    }

    const uniqueNames = new Set(names);
    if (uniqueNames.length !== names.length) {
      throw new Error(NAME_DUPLICATE_ERROR);
    }
  }

  static validateCount(count) {
    if (isNaN(count) || count < COUNT_MIN) {
      throw new Error(COUNT_VALUE_ERROR);
    }
  }
}

export default Validator;
