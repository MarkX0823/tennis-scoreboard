const initialState = {
  L: {
    point: 0,
    game: [0],
    set: [0],
    ad: false,
  },
  R: {
    point: 0,
    game: [0],
    set: [0],
    ad: false,
  },
};

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

const calculate = (state, pos) => {
  switch (pos) {
    case 'L':
      incPoint(state.L, state.R);
      break;
    case 'R':
      incPoint(state.R, state.L);
      break;
    default:
      break;
  }
  console.log(state);
  return state;
};

const score = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_SCORE':
      return Object.assign({}, calculate(state, action.payload.pos));
    default:
      return state;
  }
};

export default score;
