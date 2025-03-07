/* Código gerado pelo chat gpt onde as rotas são declaradas aqui dentro e nn funciona igual
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Feed';
import About from '../pages/New';
import New from '../New';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/about" element={<New/>} />
            </Routes>
        </BrowserRouter>
    );
   
}
9+
/*Meu código que até o chat aprovou e não funciona tambem, as rotas estão no arquivo tab.routes e devidamente declaradas 

import { NavigationContainer } from "@react-navigation/native";

import {drawerRoutes} from './drawer.routes';
export default function Routes() {
    return (
        <NavigationContainer>
            <DrawerRoutes />
        </NavigationContainer>
    )
}
    */