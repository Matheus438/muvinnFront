import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CadastroImovel from './src/screens/CadastroImovel';
import CadastroScreen from './src/screens/CadastroImovel';
const Stack = createStackNavigator();

function App(): React.ReactElement {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='CadastroImovel' component={CadastroScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
