import { createStackNavigator, createAppContainer } from 'react-navigation';
//screens
import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import MapScreen from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import colors from '../constants/colors';
import { Platform } from 'react-native';

const PlacesNavigator = createStackNavigator({
    Places: PlacesListScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? colors.primary : "valueOf"
        },
        headerTintColor: Platform.OS === "android" ? "white" : colors.primary
    }
});

export default createAppContainer(PlacesNavigator);