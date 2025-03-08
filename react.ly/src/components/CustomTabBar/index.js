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

                <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected:true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{flex:1}}
                >
                    <Text>TESTE</Text>
                </TouchableOpacity>
            })}
        </View>
    </View>
  );
}

const styles = Stylesheet.create({

})