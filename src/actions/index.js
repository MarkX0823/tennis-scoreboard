export const increaseScore = pos => {
  switch (pos) {
    case 'L':
      return {type: 'INCREASE_SCORE_L'};
    case 'R':
      return {type: 'INCREASE_SCORE_R'};
    default:
      break;
  }
};
