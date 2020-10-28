import produce from 'immer';
import cloneDeep from 'lodash/cloneDeep';

class Player {
  constructor() {
    this.point = 0;
    this.game = 0;
    this.set = 0;
    this.ad = false;
  }
}

class Point {
  constructor() {
    this.L = new Player();
    this.R = new Player();
  }
}

const incGame = (winner, loser) => {
  console.log('incGame');
  winner.point = loser.point = 0;
  winner.ad = loser.ad = false;
  return;
};

const deuceCheck = (winner, loser) => {
  if (loser.point < 40 || winner.ad === true) {
    incGame(winner, loser);
  } else if (loser.ad === true) {
    loser.ad = false;
  } else {
    winner.ad = true;
  }
};

const incPoint = (winner, loser) => {
  switch (winner.point) {
    case 0:
    case 15:
      winner.point += 15;
      break;
    case 30:
      winner.point = 40;
      break;
    case 40:
      deuceCheck(winner, loser);
      break;
    default:
      break;
  }
};

const calculate = (point, pos) => {
  switch (pos) {
    case 'L':
      incPoint(point.L, point.R);
      break;
    case 'R':
      incPoint(point.R, point.L);
      break;
    default:
      break;
  }
};

const score = (state = [new Point()], action) => {
  switch (action.type) {
    case 'INCREASE_SCORE':
      const point = cloneDeep(state[state.length - 1]);
      const _state = produce(state, draftState => {
        calculate(point, action.payload.pos);
        draftState.push(point);
      });
      return _state;
    default:
      return state;
  }
};

export default score;
