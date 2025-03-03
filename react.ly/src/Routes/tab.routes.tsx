import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import feed from '../Feed' ;
import New from '../New' ;
//podemos usar a biblioteca feather para icones mais tarde
const Tab = createBottomTabNavigator();


export default function TabRoutes() {
 return (

<Tab.Navigator screenOptions={{headerShown: false}}>
 <Tab.Screen
name="Feed"
component={feed}
/>

<Tab.Screen
    name="new"
    component={New}
 />
 </Tab.Navigator>
    
    )
}