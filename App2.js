import React from 'react';
import Team from './src/components/Team';
import {View, StyleSheet} from 'react-native';
import {createStore} from 'redux';
import rootReducer from './src/reducers';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <View style={styles.view}>
        <Team name="Hawks" pos="L" />
        <Team name="Eagles" pos="R" />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, flexDirection: 'row'},
});

export default App;
