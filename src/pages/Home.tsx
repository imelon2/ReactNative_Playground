import { useNavigation, NavigationProp } from "@react-navigation/native";
import React from "react"
import { View, Text, Pressable, SafeAreaView, StyleSheet } from "react-native"
import { RootStackParamList } from "../../AppInner";

function Home() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={styles.container}>
            <Pressable onPress={() => navigation.navigate('Chart')} style={styles.wrapper}>
                <Text>Chart Page {">"}</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('DraggableFlatListPage')} style={styles.wrapper}>
                <Text>Draggable FlatList Page {">"}</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Search')} style={styles.wrapper}>
                <Text>Search Page {">"}</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('PickerOfWheel')} style={styles.wrapper}>
                <Text>PickerOfWheel Page {">"}</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('DateTimePicker')} style={styles.wrapper}>
                <Text>DateTimePicker Page {">"}</Text>
            </Pressable>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container : {
        alignItems:'center'
    },
    wrapper : {
        paddingHorizontal:15,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:'#000',
        borderBottomWidth:1
    }
})
export default Home