# javascript-racingcar-precourse

## 요구사항

### 과제 진행 요구 사항

- [x] 저장소 포크하고 클론
- [x] README.md에 구현할 기능 목록 정리
- [ ] Git 커밋 단위 기능 목록단위로 추가하고, 커밋 메시지 작성

<br>

### 기능 요구 사항

- 쉼표 또는 클론을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합 반환
- 기본 구분자(쉼표, 콜론) 외의 커스텀 구분자 지정 가능. 커스텀 구분자는 "//"와 "\n" 사이에 위치
  <br>
  `예 : //;\n1;2;3 -> 구분자는 세미콜론(;)이므로 결과값은 6`
- 사용자가 잘못된 값을 입력한 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션 종료

## 구현할 기능 목록

- [ ] 입력

  - 자동차 이름 입력
  - 자동차 이름 쉼표를 기준으로 분리
  - 시도 횟수 입력

- [ ] 자동차 이름 유효성 검사

  - 빈 이름 여부
  - 각 이름 5글자 초과 여부

- [ ] 시도 횟수 유효성 검사

  - 숫자 여부
  - 양의 정수 여부

- [ ] 자동차 객체 생성

  - 입력을 바탕으로 자동차 이름, 위치 초기화
  - 자동차 목록 생성

- [ ] 게임 진행

  - 입력 횟수 만큼 라운드 반복
  - 랜덤 값 생성 -> 랜덤 값이 4 이상이면 전진, 미만이면 정지

- [ ] 결과 출력

  - 각 라운드 후 실행 결과 출력
  - 형식은 `자동차이름 : ---`
  - 가장 멀리 이동한 자동차 찾기
  - 우승자 여러명이면 쉼표로 구분
  - 형식 : `최종 우승자 : 이름`

- [ ] 프로그램 제어
  - 입력 -> 검증 -> 게임 진행 -> 결과 출력 반복
  - 에러 발생 시 종료

## 설계

- 메인 실행 모듈
- 자동차 객체
- 입력 검증
- 게임 진행 로직
- 입력
- 출력

<br>
위와 같이 구분하기로 하였다.

### App

메인 모듈로 프로그램 실행

```js
class App {
  async run() {}
}
```

### Car

자동차 객체

```js
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
```

### Validator

```js
class InputValidator {
  static validateNames(names) {
    // 빈 이름 검증
    // 5자 초과 검증
    // 에러 시 throw new Error("[ERROR] ...")
  }

  static validateCount(count) {
    // 숫자 검증
    // 양의 정수 검증
    // 에러 시 throw new Error("[ERROR] ...")
  }
}
```

### Game

```js
class Game {
  constructor(names, count) {
    this.cars = names.map((name) => new Car(name));
    this.count = count;
  }

  round() {
    // 각 자동차에 대해 랜덤 값 생성 및 이동
  }

  play() {
    //count만큼 반복
    //round의 결과 출력
  }

  getWinners() {
    // 최대 위치 찾기
    // 최대 위치에 있는 모든 자동차 반환
  }
}
```

### Output

```js
class Output {
  static printResult(cars) {
    //각 차 마다의 결과 결과 출력
  }

  static printWinners(winners) {
    //우승자 출력
  }

  static printGameStart() {
    //'실행 결과' 출력
  }
}
```

### Input

```js
class Input {
  static async readNames() {
    //입력 프롬프트(자동차 이름)
  }

  static async readCount() {
    //입력 프롬프트(시도할 횟수)
  }
}
```

<br>

다이어그램으로 정리하면 다음과 같다.

![클래스 다이어그램](https://raw.githubusercontent.com/lucykim05/image/main/KakaoTalk_20251022_190520621.png)
