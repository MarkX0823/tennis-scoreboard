import React from 'react';
import Team from './Team';
import {View} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Team name="Hawks" />
        <Team name="Eagles" />
      </View>
    </>
  );
};

export default App;
