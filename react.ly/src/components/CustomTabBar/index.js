import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

export default function CustomTabBar( state, descriptors, navigation) {
  return(
     <View style={styles.container} >
        <View style={styles.content}>
            {state.routes.map((route, index)=>{
                const {options} = descriptors[route.key];


                const isFocused = state.index === index;

                const onPress = () =>{
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if(!isFocused && !event.defaultPrevented){
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () =>{
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
            })}
              <Text>TESTE</Text>
        </View>
    </View>
  );
}

const styles = Stylesheet.create({

})