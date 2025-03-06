import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import feed from '../Feed' ;
import New from '../New' ;
//podemos usar a biblioteca feather para icones mais tarde

/*Rotas do bottom navigation, em um primeiro momento tera apenas 2 links*/
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