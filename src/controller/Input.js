import { MissionUtils } from '@woowacourse/mission-utils';

class Input {
  static async getNames() {
    const input = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    return input.split(',').map((name) => name.trim());
  }

  static async getCount() {
    const input = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    return Number(input);
  }
}

export default Input;
