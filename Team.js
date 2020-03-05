import React, {Component} from 'react';

import {Text, Button, View} from 'react-native';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {score: 0};
    this.increaseScore = this.increaseScore.bind(this);
  }

  increaseScore() {
    this.setState({
      score: this.state.score + 2,
    });
  }

  render() {
    return (
      <>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text h2>{this.props.name}</Text>
          <Text h1>{this.state.score}</Text>
          <Button title="+2" onPress={this.increaseScore} />
        </View>
      </>
    );
  }
}

export default Team;
