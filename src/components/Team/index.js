import React from 'react';

import {Text, View} from 'react-native';
import Score from '../../containers/Score';
import IncreaseScore from '../../containers/IncreaseScore';
import styles from './styles';

const Team = ({name, pos}) => (
  <View style={styles.view}>
    <Text h2>{name}</Text>
    <Score pos={pos} />
    <IncreaseScore pos={pos} />
  </View>
);

export default Team;
