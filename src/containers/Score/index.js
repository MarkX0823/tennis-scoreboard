import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

class Score extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let point = this.props.score[this.props.score.length - 1];
    let score;
    switch (this.props.pos) {
      case 'L':
        score = point.L.point;
        break;
      case 'R':
        score = point.R.point;
        break;
      default:
        score = -1;
        break;
    }

    return <Text h1>{score}</Text>;
  }
}

const mapStateToProps = state => ({
  score: state.score,
});

export default connect(mapStateToProps)(Score);
