class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move(randomNum) {
    if (randomNum >= 4) {
      this.position += 1;
    }
  }

  getPosition() {
    return this.position;
  }

  getName() {
    return this.name;
  }
}
