import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-reanimated'
import {Routes} from './src/Routes';

export default function App() {
    return (
        <Routes />
        
    );
}

/*Quero implemntar isso no futuro se possivel

import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // Define o tempo para mostrar o SplashScreen
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router> {/* Define o Router para as rotas */
    /*
    {showSplash ? (
        <SplashScreen /> 
      ) : (
        <Routes> 
          <Route path="/" element={<Login />} /> {/* Exemplo de rota para a página de Login */
    /* </Routes>
      )}
    </Router>
  );


*/
//A ideia é que o unico ponto em./routes levasse o arquivo até a PAST e de la ele automaticamente leie o index por padrão