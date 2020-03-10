import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

class Score extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Text h1>{this.props.score}</Text>;
  }
}

const mapStateToProps = state => ({
  score: state.score,
});

export default connect(mapStateToProps)(Score);
