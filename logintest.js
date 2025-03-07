import { Stylesheet, Test, View} from 'react-native';

export default function FutureAppLogin(){
    return (
        <View style={styles.container}>
            <Text style={{ color: "#fff", marginTop: 40}}>'Demo Version´s</Text>
        </View>
    );
}
const styles = Stylesheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        padding: 20,
   },
});