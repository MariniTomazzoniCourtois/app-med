import * as React from 'react';
import {Image, StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logoufsc from './assets/logoufsc.png';
import lamina from './assets/lamina.jpeg';
import laminapwp from './assets/laminapwp.jpeg';

function HomeScreen({ navigation }) { 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={logoufsc} style={styles.logoufsc} />
      <Button
        title="Estudar"
        onPress={() => navigation.navigate('Details')} 
        
      />
      <Button
        title="Praticar"
        onPress={() => navigation.navigate('Pratic')}
      />
      <Button
        title="Sobre"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text></Text>
      <Button
        title="Sistema digestório"
        onPress={() => navigation.navigate('Sistem')}
      />
      <Button
        title="Teste(1)"
        onPress={() => navigation.navigate('Sistem')} //estão todos indo pra mesma página Sistem
      />
      <Button
        title="Teste(2)"
        onPress={() => navigation.navigate('Sistem')}
      />
    </View>
  );
}

function PraticScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Praticar</Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sobre</Text>
    </View>
  );
}

function SistemScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={lamina} style={{ width: 450, height: 250 }} />
      <Image source={laminapwp} style={{ width: 450, height: 250 }} /> 
      <Text></Text>

    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
        options={{ title: 'Inicio' }} />
        <Stack.Screen name="Details" component={DetailsScreen}
        options={{ title: 'Estudar' }} />
        <Stack.Screen name="Pratic" component={PraticScreen}
        options={{ title: 'Praticar' }} />
        <Stack.Screen name="About" component={AboutScreen}
        options={{ title: 'Sobre' }} />
        <Stack.Screen name="Sistem" component={SistemScreen}
        options={{ title: 'Sistema Digestório' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  logoufsc: {
    alignItems:'center',
    height:300,
    width: 300,
    fontSize:50,
    marginTop: 24,
  },
});

export default App;