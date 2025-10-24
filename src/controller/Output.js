import { MissionUtils } from '@woowacourse/mission-utils';
import { WINNER_MESSAGE, START_MESSAGE } from '../constants/constants.js';

class Output {
  static printGameStart() {
    MissionUtils.Console.print(START_MESSAGE);
  }

  static printResult(cars) {
    cars.forEach((car) => {
      MissionUtils.Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    });
    MissionUtils.Console.print('');
  }

  static printWinners(winners) {
    MissionUtils.Console.print(`${WINNER_MESSAGE}${winners.join(', ')}`);
  }
}

export default Output;
