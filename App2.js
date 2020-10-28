import React from 'react';
import Team from './src/components/Team';
import {View, StyleSheet} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/reducers';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';

// Redux-Logger
// 判斷是否開啟Chrome Debug
const {pathname} = window.location || {};
const IS_RUNNING_IN_CHROME = pathname && pathname.indexOf('debugger-ui');

const logger = createLogger({
  collapsed: true,
  diff: true,
  titleFormatter: (action, time, took) =>
    `action @ ${time} ${action.type} (in ${took.toFixed(2)} ms)`,
});
// ------------

const middleware = [IS_RUNNING_IN_CHROME && logger].filter(Boolean);

const store = createStore(rootReducer, applyMiddleware(...middleware));

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
