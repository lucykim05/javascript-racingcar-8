import { MissionUtils } from '@woowacourse/mission-utils';
import Game from '../../src/entity/Game.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.forEach((number) => {
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(number);
  });
};

describe('Game 테스트', () => {
  describe('생성자', () => {
    test('이름 배열로 자동차 객체 생성', () => {
      const game = new Game(['a', 'b'], 5);
      const cars = game.getCars();

      expect(cars).toHaveLength(2);
      expect(cars[0].getName()).toBe('a');
      expect(cars[1].getName()).toBe('b');
    });
  });

  describe('round', () => {
    test('한 라운드에 모든 차가 이동 시도', () => {
      mockRandoms([4, 3]);
      const game = new Game(['a', 'b'], 1);

      game.round();

      const cars = game.getCars();

      expect(cars[0].getPosition()).toBe(1);
      expect(cars[1].getPosition()).toBe(0);
    });

    test('여러 라운드 진행 시나리오', () => {
      mockRandoms([5, 8, 3, 1, 7, 4]);
      const game = new Game(['a', 'b'], 3);

      game.round();

      expect(game.getCars()[0].getPosition()).toBe(1);
      expect(game.getCars()[1].getPosition()).toBe(1);

      game.round();

      expect(game.getCars()[0].getPosition()).toBe(1);
      expect(game.getCars()[1].getPosition()).toBe(1);

      game.round();

      expect(game.getCars()[0].getPosition()).toBe(2);
      expect(game.getCars()[1].getPosition()).toBe(2);
    });
  });

  describe('play', () => {
    test('count만큼 round진행', () => {
      mockRandoms([4, 4, 4, 4, 4, 4]);
      const game = new Game(['a', 'b'], 3);

      game.play();

      expect(game.getCars()[0].getPosition()).toBe(3);
      expect(game.getCars()[1].getPosition()).toBe(3);
    });
  });

  describe('getWinners', () => {
    test('단독 우승자 시나리오', () => {
      mockRandoms([5, 2]);
      const game = new Game(['a', 'b'], 1);

      game.play();
      const winners = game.getWinners();

      expect(winners).toEqual(['a']);
    });

    test('공동 우승자 시나리오(2명 중 2명)', () => {
      mockRandoms([5, 5]);
      const game = new Game(['a', 'b'], 1);

      game.play();
      const winners = game.getWinners();

      expect(winners).toEqual(['a', 'b']);
    });

    test('공동 우승자 시나리오(3명 중 2명)', () => {
      mockRandoms([6, 5, 2]);
      const game = new Game(['a', 'b', 'c'], 1);

      game.play();
      const winners = game.getWinners();

      expect(winners).toEqual(['a', 'b']);
    });

    test('모두가 제자리일 때 공동 우승', () => {
      mockRandoms([2, 1, 3]);
      const game = new Game(['a', 'b', 'c'], 1);

      game.play();
      const winners = game.getWinners();

      expect(winners).toEqual(['a', 'b', 'c']);
    });
  });
});
