import React from 'react';

import {Text, View} from 'react-native';
import Score from '../../containers/Score';
import IncreaseScore from '../../containers/IncreaseScore';
import styles from './styles';

const Team = ({name}) => (
  <View style={styles.view}>
    <Text h2>{name}</Text>
    <Score />
    <IncreaseScore />
  </View>
);

export default Team;
