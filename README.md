# React 로 구현한 rgb 색깔 맞추기 게임입니다

## 예전에 javascript 를 이용해 구현한 rgb 게임을 react 로 재구현.

## 깨달은 점

- 삼항연산자 이중사용
  - 페이지 구현부분에 사용
- render 와 return 사이에 미리 구현하고픈 내용들을 입력해 구현할 수 있다
  - 처음에 값을 설정해 놓으니깐 그림만 바뀌는 부분을 구현해 낼수 없었다 전역객체를 이용한 `window.location.reload()`를 이용하려니까 전체가 새로고침 되어서 score 가 초기화 되는 현상때문에 issue 가 있었는데 중간부분에 구현을 해내어서 setState 사용을 통해 해결
- props 넘겨주기
  - Component 분리하기 위해서는 App.js 부분에서 넘겨줄 인수에 대해서 값을 보내주고 새로 만든 ComponentPage 에서는 그값을 사용하기 위해서 받아오는데 편하게 사용하기 위해서 const{ ...} =this.props 를 사용해서 가져온다.

### 강사님 코드리뷰

- 상태를 바꿔주는 것은 setState를 이용해서만 바꿔주기
  - this.state를 이용해서 바꿔주는 것은 좋지 않고 위험하다
- render함수안에 메소드를 사용하지 않기
  - 생각 한것 외로 여러번 호출 될수 있기 때문이다. 
  - componentDidMount()인 lifeCycle API로 해결 
