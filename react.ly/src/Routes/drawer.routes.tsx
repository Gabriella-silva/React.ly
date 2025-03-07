import {createDrawerNavigator} from '@react-navigation/drawer';
import {feather} from '@expo/vector-icons';


import TabRoutes from './tab.routes';


const Drawer = createDrawerNavigator();


export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
            name="home"
            component={TabRoutes}
            drawerLabel= "inicio"
            />
                  
        </Drawer.Navigator>
    )
}
