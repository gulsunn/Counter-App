import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/counter';

export default function App() {
  return (
    <View style={styles.container}>
      <Counter/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
