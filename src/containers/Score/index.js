import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

class Score extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let score;
    switch (this.props.pos) {
      case 'L':
        score = this.props.score.L.point;
        break;
      case 'R':
        score = this.props.score.R.point;
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
