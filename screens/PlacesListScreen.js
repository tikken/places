import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const PlacesListScreen = props => {
  return (
    <View>
      <Text style={S.heading}>Places list</Text>
    </View>
  );
};

PlacesListScreen.navigationOptions = navData => {
  return {
    headerTitle: "Places",
    headerRight:
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Add place'
          size={23}
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => {
            navData.navigation.navigate("NewPlace");
          }}
        />
      </HeaderButtons>
    
  };
};

const S = StyleSheet.create({
  heading: {}
});

export default PlacesListScreen;
