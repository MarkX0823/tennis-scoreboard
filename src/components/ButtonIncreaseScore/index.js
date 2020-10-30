import React from 'react';

import {Button, TouchableNativeFeedback} from 'react-native';

const ButtonIncreaseScore = ({player, onPress}) => (
  <Button
    title="win"
    onPress={onPress}
    background={TouchableNativeFeedback.SelectableBackground()}
  />
);

export default ButtonIncreaseScore;
