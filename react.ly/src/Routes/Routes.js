import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import feed from '../Feed' ;
import New from '../New' ;

import { CustomTabBar } from '../components/CustomTabBar';
const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarMideOnKeyboard: true,
            tabBarShowLabel:false,
            tabBarActiveTintColor:"#121212",
            tabBarStyle:{
                borderTopWidth:0,
                backgroundColor:"#FFF",
            }
            }}>
                tabBar={ (props) =><CustomTabBar {...props}/>}
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="New" component={New} />
        </Tab.Navigator>
    );
}