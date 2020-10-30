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

class Score {
  constructor() {
    this.L = new Player();
    this.R = new Player();
  }
}

const incSet = winner => {
  console.log('incSet');
  winner.set++;
  return;
};

const incGame = (winner, loser) => {
  console.log('incGame');
  winner.point = loser.point = 0;
  winner.ad = loser.ad = false;
  switch (winner.game) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      winner.game++;
      break;
    case 5:
      if (loser.game < 5) {
        incSet(winner);
      } else if (loser.game === 5 || loser.game === 6) {
        winner.game++;
      } else {
        console.log('wrong state!');
      }
      break;
    case 6:
      incSet(winner);
      break;
    default:
      console.log('wrong state!');
      break;
  }
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
  if (winner.game === 6 && loser.game === 6) {
    console.log('tiebreak');
    if (winner.point < 6) {
      winner.point++;
    } else {
      if (loser.point < 6) {
        incGame(winner, loser);
      } else {
        if (winner.point > loser.point) {
          incGame(winner, loser);
        } else {
          winner.point++;
        }
      }
    }
  } else {
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
  }
};

const calculate = (score, pos) => {
  switch (pos) {
    case 'L':
      incPoint(score.L, score.R);
      break;
    case 'R':
      incPoint(score.R, score.L);
      break;
    default:
      break;
  }
};

const score = (state = [new Score()], action) => {
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
