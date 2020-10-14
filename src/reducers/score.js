const score = (state = {L: 0, R: 0}, action) => {
  switch (action.type) {
    case 'INCREASE_SCORE_L':
      state.L += 2;
      return Object.assign({}, state);
    case 'INCREASE_SCORE_R':
      state.R += 2;
      return Object.assign({}, state);
    default:
      return state;
  }
};

export default score;
