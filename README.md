# javascript-racingcar-precourse

## > 📝 [Notion 정리 문서](https://amplified-pot-cae.notion.site/Week2-29375c00010a80ad9115c938847997cf?source=copy_link)

학습내용, 구현 과정, 리팩토링 정리해놓은 문서입니다.

## 요구사항

### 과제 진행 요구 사항

- [x] 저장소 포크하고 클론
- [x] README.md에 구현할 기능 목록 정리
- [x] Git 커밋 단위 기능 목록단위로 추가하고, 커밋 메시지 작성
- [x] indent depth를 3이 넘지 않도록 구현한다.
- [x] 3항 연산자를 쓰지 않는다.
- [x] 단일 책임 원칙
- [x] Jest를 활용하여 테스트 코드로 확인한다.

<br>

### 기능 요구 사항

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

## 구현할 기능 목록

- [x] 입력

  - 자동차 이름 입력
  - 자동차 이름 쉼표를 기준으로 분리
  - 시도 횟수 입력

- [x] 자동차 이름 유효성 검사

  - 빈 이름 여부
  - 각 이름 5글자 초과 여부

- [x] 시도 횟수 유효성 검사

  - 숫자 여부
  - 양의 정수 여부

- [x] 자동차 객체 생성

  - 입력을 바탕으로 자동차 이름, 위치 초기화
  - 자동차 목록 생성

- [x] 게임 진행

  - 입력 횟수 만큼 라운드 반복
  - 랜덤 값 생성 -> 랜덤 값이 4 이상이면 전진, 미만이면 정지

- [x] 결과 출력

  - 각 라운드 후 실행 결과 출력
  - 형식은 `자동차이름 : ---`
  - 가장 멀리 이동한 자동차 찾기
  - 우승자 여러명이면 쉼표로 구분
  - 형식 : `최종 우승자 : 이름`

- [x] 프로그램 제어
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
위와 같이 구분하기로 하였고, 상태는 다음과 같이 변화한다.
<br>

![상태 다이어그램](https://raw.githubusercontent.com/lucykim05/image/main/precourse2_dia.png)

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
class Validator {
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

  getCars() {
    return this.cars;
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
  static async getNames() {
    //입력 프롬프트(자동차 이름)
  }

  static async getCount() {
    //입력 프롬프트(시도할 횟수)
  }
}
```

<br>

다이어그램으로 정리하면 다음과 같다.

![클래스 다이어그램](https://raw.githubusercontent.com/lucykim05/image/main/precourse2_diagram.png)

## 계층 분리

```
src/
├── App.js                 # 프로그램 메인 실행 (전체 흐름 제어)
├── entity/                # 비즈니스 로직 (게임 규칙, 핵심 로직)
│   ├── Car.js             # 자동차 객체
│   └── Game.js            # 게임 진행 및 상태 관리
├── controller/            # 입출력 제어
│   ├── Input.js           # 사용자 입력
│   └── Output.js          # 결과 출력
├── utils/                 # 공통 유틸리티 및 검증 로직
│   └── Validator.js       # 유효성 검증
└── constants/             # 상수 관리
    └── constants.js       # 공통 상수
```

계층 아키텍처에 따라서 계층 분리를 추가로 해보면 다음과 같다.

### Presentation Layer(`controller`)

- 사용자 입출력
- Console을 이용하여 입출력 처리
- `Input.js`, `Output.js`

### Application Layer(`App.js`, `utils`)

- 입력 검증
- 메인 실행

### Domain Layer(`entity`)

- 자동차와 게임 규칙
- 다른 계층에 독립적

### 의존성 방향

```
Presentation → Application → Domain
```

- Domain Layer는 다른 계층에 의존하지 않음

## 테스트

Jest를 활용하여 단위테스트를 진행하였다. 단위테스트는 `Input.js`, `Output.js`를 제외한 `Car`, `Game`, `Validator`에 대해서 진행하였고, 테스트 내용은 다음과 같다.

### Car

1. 생성자 테스트
2. `move` 테스트
   - randomNum이 4이상이면 전진, 미만이면 정지
3. `get` 테스트
   - `getName`이 이름 return
   - `getPosition`이 위치 return

### Game

1. 생성자 테스트
2. `round` 테스트
   - 한 라운드에 모든 차 이동 시도
   - 여러 라운드 진행 시나리오 실행
3. `play` 테스트
   - count 만큼 round 진행
4. `getWinners`테스트
   - 단독 우승자 시나리오 실행
   - 공동 우승자 시나리오 실행(2명 중 2명 우승)
   - 공동 우승자 시나리오 실행(3명 중 2명 우승)
   - 모두가 제자리일 때 공동 우승 시나리오 실행

### Validator

1. `validateNames` 테스트
   - 정상 통과
   - 빈 이름 에러 발생
   - 5글자 초과 에러 발생
   - 5글자는 통과
   - 중복 이름 에러 발생
2. `validateCount` 테스트
   - 정상 통과
   - 최소값 미만 에러 발생
   - 숫자가 아니면 에러 발생
