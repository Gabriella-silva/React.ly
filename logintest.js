import { Button, Stylesheet, Text, View} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import {useCallback, useRef} from 'react';
export default function FutureAppLogin(){


    const bottomSheetref = useref(null);
    //valor minimo e maximo do sheef
    const snapPoints = useMemo(() => ['30%', '80%'], []);

    //funcao para fechar o bottomsheet
const handleCloseAction = () => bottomSheetRef.current?.close();

//funcao para abrir o bottomsheet
const handleOpenPress = () => bottomSheetRef.current?.expand();

    return (
        <GestureHandlerRootView style={{ flex: 1}}>
        <View style={styles.container}>
{/*/* enableHandlePanning={true} handleComponent={() => <View style={{backgroundColor: '#000', width: 40, height: 6, borderRadius: 3}} />}** */}
            <BottomSheet ref={bottomSheetRef}
             index={0} snapPoints={snapPoints}
              backgroundStyle={{backgroundColor:
               '#FFF'}}
                enablePanDownToClose={true} >

                           <View style={styles.contentContainer}>
                    < Text> Conteudo </Text>
                    <Button title="Fechar" onPress={() => {}} />
                </View>
            </BottomSheet>

        </View>
        </GestureHandlerRootView>
    );
}
const styles = Stylesheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        padding: 20,
   },
});