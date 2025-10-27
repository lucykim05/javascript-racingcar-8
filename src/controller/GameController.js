import Input from './Input.js';
import Output from './Output.js';
import Validator from '../utils/Validator.js';
import Game from '../entity/Game.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class GameController {
  async start() {
    try {
      const { names, count } = await this.getValidatedInputs();
      const game = this.playGame(names, count);
      this.showWinners(game);
    } catch (error) {
      this.handleError(error);
    }
  }

  async getValidatedInputs() {
    const names = await Input.getNames();
    const count = await Input.getCount();

    Validator.validateNames(names);
    Validator.validateCount(count);

    return { names, count };
  }

  playGame(names, count) {
    const game = new Game(names, count);
    Output.printGameStart();

    for (let i = 0; i < count; i++) {
      this.playRound(game);
    }

    return game;
  }

  playRound(game) {
    game.round();
    Output.printResult(game.getCars());
  }

  showWinners(game) {
    const winners = game.getWinners();
    Output.printWinners(winners);
  }

  handleError(error) {
    MissionUtils.Console.print(error.message);
    throw error;
  }
}

export default GameController;
