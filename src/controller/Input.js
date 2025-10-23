import { MissionUtils } from '@woowacourse/mission-utils';

class Input {
  static async readNames() {
    const input = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
  }

  static async readCount() {
    const input = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );
  }
}
