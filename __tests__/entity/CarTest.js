import Car from '../../src/entity/Car';

describe('Car 테스트', () => {
  describe('생성자', () => {
    test('이름과 초기 생성자 설정 확인', () => {
      const car = new Car('A');

      expect(car.getName()).toBe('A');
      expect(car.getPosition()).toBe(0);
    });
  });

  describe('move', () => {
    test('randomNum이 4이상이면 전진, 미만이면 정지', () => {
      const car = new Car('A');

      car.move(4);
      expect(car.getPosition()).toBe(1);

      car.move(3);
      expect(car.getPosition()).toBe(1);

      car.move(5);
      expect(car.getPosition()).toBe(2);

      car.move(1);
      expect(car.getPosition()).toBe(2);

      car.move(9);
      expect(car.getPosition()).toBe(3);

      car.move(3);
      car.move(4);
      car.move(5);
      car.move(2);
      car.move(7);
      car.move(3);
      expect(car.getPosition()).toBe(6);
    });
  });

  describe('get 메서드 테스트', () => {
    test('getName은 이름 return', () => {
      const car = new Car('abcd');
      expect(car.getName()).toBe('abcd');

      const carr = new Car('aaaa');
      expect(carr.getName()).toBe('aaaa');
    });

    test('getPosition은 위치 return', () => {
      const car = new Car('a');
      car.move(4);

      expect(car.getPosition()).toBe(1);
    });
  });
});
