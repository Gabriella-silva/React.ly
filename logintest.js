import { Button, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import { useCallback, useRef, useMemo } from 'react';

export default function FutureAppLogin() {

    // Correção: 'useref' para 'useRef'
    const bottomSheetRef = useRef(null);

    // Valor mínimo e máximo do sheet
    const snapPoints = useMemo(() => ['30%', '80%'], []);

    // Função para fechar o bottomsheet
    const handleCloseAction = () => bottomSheetRef.current?.close();

    // Função para abrir o bottomsheet
    const handleOpenPress = () => bottomSheetRef.current?.expand();

    const handleChange = useCallback((index) => {
        console.log('Change status', index);
    }, []);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>

                <Button style={styles.but} title="Login" onPress={handleOpenPress} />

                <BottomSheet
                    ref={bottomSheetRef}
                    index={0}
                    snapPoints={snapPoints}
                    backgroundStyle={{ backgroundColor: '#FFF' }}
                    enablePanDownToClose={true}
                    onChange={handleChange}
                >
                    <View style={styles.contentContainer}>
                        <Text>Conteúdo</Text>
                        <Button style={styles.Btn} title="Fechar" onPress={handleCloseAction} />

                        {/* Área para adicionar o componente de login */}
                        {/* Exemplo: <LoginForm /> */}

                    </View>
                </BottomSheet>

            </View>
        </GestureHandlerRootView>
    );
}

// Correção: 'Stylesheet' para 'StyleSheet'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#313A4B",
        padding: 20,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5s',
    },
    but:{
        borderRadius: 23,
        alignItems: 'center',
        justifyContent: 'center',


    }
});
