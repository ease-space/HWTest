import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.gestureHandler}>
        <View />
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
