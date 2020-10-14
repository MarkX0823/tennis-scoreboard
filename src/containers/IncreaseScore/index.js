import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, TouchableNativeFeedback} from 'react-native';
import {increaseScore} from '../../actions';

class IncreaseScore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button
        title="+2"
        onPress={() => this.props.dispatch(increaseScore(this.props.pos))}
        background={TouchableNativeFeedback.SelectableBackground()}
      />
    );
  }
}

export default connect()(IncreaseScore);
