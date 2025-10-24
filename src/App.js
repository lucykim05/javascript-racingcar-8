import Input from './controller/Input.js';
import Output from './controller/Output.js';
import Validator from './utils/Validator.js';
import Game from './entity/Game.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      //입력
      const names = await Input.readNames();
      const count = await Input.readCount();

      //검증
      Validator.validateNames(names);
      Validator.validateCount(count);

      //게임 실행
      const game = new Game(names, count);
      Output.printGameStart();

      for (let i = 0; i < count; i++) {
        game.round();
        Output.printResult(game.getCars());
      }

      //결과 출력
      const winners = game.getWinners();
      Output.printWinners(winners);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
