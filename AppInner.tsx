import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chart from "./src/pages/Chart";
import Home from "./src/pages/Home";
import DraggableFlatListPage from "./src/pages/DraggableFlatListPage";
import Search from "./src/pages/Search";
import PickerOfWheel from "./src/pages/PickerOfWheel";
import DateTimePicker from "./src/pages/DateTimePicker";


export type RootStackParamList ={
    Home:undefined;
    Chart:undefined;
    DraggableFlatListPage:undefined;
    Search:undefined;
    PickerOfWheel:undefined;
    DateTimePicker:undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function AppInner() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Chart" component={Chart}/>
            <Stack.Screen name="DraggableFlatListPage" component={DraggableFlatListPage}/>
            <Stack.Screen name="Search" component={Search}/>
            <Stack.Screen name="PickerOfWheel" component={PickerOfWheel}/>
            <Stack.Screen name="DateTimePicker" component={DateTimePicker}/>
        </Stack.Navigator>
    )
}

export default AppInner