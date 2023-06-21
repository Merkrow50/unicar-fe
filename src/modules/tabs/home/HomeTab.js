import {useContext} from "react";
import {Button, View, Text} from "react-native";
import {AuthContext} from "../../../config/Contexts";
import {Avatar, Card} from "react-native-elements";
import {MapScreen} from "../../map/MapScreen";
import {BaseHeader} from "../../../components/header/BaseHeader";

export function HomeTab() {

  return (
    <View style={{flex: 1}}>
      <BaseHeader
        title="Home"
        render={
          <View>
            <Text>Seja Bem Vindo!</Text>
          </View>
        }/>
      <View>
        <Text style={{
            color: 'rgb(0,0,0)',
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 50,
          textAlign: "center"
          }}>Seja Bem Vindo!</Text>
      </View>
      <View style={{flex: 0.5, padding: 1,margin: 5, justifyContent: "center", backgroundColor: "#00904E"}}>
        <MapScreen/>
      </View>

    </View>
  );
}
