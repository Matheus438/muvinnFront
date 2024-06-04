import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CadastroImovel from './src/screens/CadastroImovel';
import CadastroScreen from './src/screens/CadastroImovel';
import Listagem from './src/screens/Listagem';
import Home from './src/screens/Home';
import EditarAnuncio from './src/screens/EditarAnuncio';

const Stack = createStackNavigator();

function App(): React.ReactElement {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Listagem' component={Listagem} options={{headerShown: false}}/>
        </Stack.Navigator>
        <Stack.Navigator>
          <Stack.Screen name='EditarAnuncio' component={EditarAnuncio} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
