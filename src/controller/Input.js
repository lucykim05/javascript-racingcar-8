import { MissionUtils } from '@woowacourse/mission-utils';
import {
  INPUT_COUNT_MESSAGE,
  INPUT_NAME_MESSAGE,
} from '../constants/constants';

class Input {
  static async getNames() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_NAME_MESSAGE);

    return input.split(',').map((name) => name.trim());
  }

  static async getCount() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_COUNT_MESSAGE);

    return Number(input);
  }
}

export default Input;
