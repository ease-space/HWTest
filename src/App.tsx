import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

import Navigation from './navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.gestureHandler}>
        <Navigation />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  gestureHandler: {
    flexGrow: 1,
  },
});

export default App;
