import Input from './view/Input.js';
import Output from './view/Output.js';
import Validator from './validator/Validator.js';
import Game from './domain/Game.js';

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
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
