import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calebe from '/Users/lenovo/CalebePedro/Prova_DDM_1/SRC/components/Calebe/index';
import Pedro from '/Users/lenovo/CalebePedro/Prova_DDM_1/SRC/components/Pedro/main';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nossos Nomes</Text>
      <Calebe></Calebe>
      <Pedro></Pedro>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
