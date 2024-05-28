import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CadastroImovel from './src/screens/CadastroImovel';
import CadastroScreen from './src/screens/CadastroImovel';
import Listagem from './src/screens/Listagem';
import Home from './src/screens/Home';
import EditarAnucio from './src/screens/EditarAnuncio';
const Stack = createStackNavigator();

function App(): React.ReactElement {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='EditarAnucio' component={EditarAnucio} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
