const score = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE_SCORE':
      return state + 2;
    default:
      return state;
  }
};

export default score;
