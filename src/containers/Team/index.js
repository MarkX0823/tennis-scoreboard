import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import {actionIncreaseScore} from '../../actions';
import ButtonIncreaseScore from '../../components/ButtonIncreaseScore';

class Team extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {score} = this.props;
    return (
      <View style={styles.team}>
        <View style={styles.score}>
          <Text h2>PlayerL</Text>
          <Text h1>{score[score.length - 1].L.point}</Text>
          <ButtonIncreaseScore
            onPress={() => {
              this.props.increaseScore('L');
            }}
          />
        </View>
        <View style={styles.score}>
          <Text h2>PlayerR</Text>
          <Text h1>{score[score.length - 1].R.point}</Text>
          <ButtonIncreaseScore
            onPress={() => {
              this.props.increaseScore('R');
            }}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  increaseScore: player => dispatch(actionIncreaseScore(player)),
});

const mapStateToProps = state => ({
  score: state.score,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Team);
