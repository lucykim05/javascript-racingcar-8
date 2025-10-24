import { MissionUtils } from '@woowacourse/mission-utils';

class Output {
  static printGameStart() {
    MissionUtils.Console.print('\n실행 결과');
  }

  static printResult(cars) {
    cars.forEach((car) => {
      MissionUtils.Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    });
    MissionUtils.Console.print('');
  }

  static printWinners(winners) {
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default Output;
