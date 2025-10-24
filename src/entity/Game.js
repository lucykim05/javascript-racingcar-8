import Car from './Car.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Game {
  constructor(names, count) {
    this.cars = names.map((name) => new Car(name));
    this.count = count;
  }

  round() {
    this.cars.forEach((car) => {
      const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
      car.move(randomNum);
    });
  }

  play() {
    for (let i = 0; i < this.count; i++) {
      this.round();
    }
  }

  getCars() {
    return this.cars;
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    return this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }
}

export default Game;
