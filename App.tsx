
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Posts from './components/Posts';
import Post from './components/Post';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Posts" component={Posts} options={{
          title: 'Posts',
        }} />
        <Stack.Screen name="Post" component={Post} options={{
          title: 'Post',
        }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

