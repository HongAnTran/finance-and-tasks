import { StyleSheet } from "react-native";
import React,{ useState } from "react";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import { Card, Button, Icon,Input } from "@rneui/themed";
import { ColorsCustom } from "../../constants/Colors";
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default function Report() {

  const [isShowMoney, setIsShowMoney] = useState(true)
  return (
    <>
   <View style={{marginTop:10}}>
        <Text 
        style={styles.title}
        onPress={()=>{
          setIsShowMoney(!isShowMoney);
        }}>Số dư khả dụng {isShowMoney ?  <Entypo name="eye" size={24} color="black" /> : <Entypo name="eye-with-line" size={24} color="black" />}</Text>
        {/* <Text style={styles.title}>1.000.000.000</Text> */}
        <Input value="1.000.000.000" secureTextEntry={isShowMoney} disabled style={{borderWidth:0}} />
   </View>
    
    <View style={styles.container}>
      <Card
        containerStyle={{
          width: "50%",
        //   marginLeft: 10,
          borderTopColor: "green",
          borderStyle: "solid",
          borderTopWidth: 10,
          borderRadius: 10,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text>Thu nhập tháng 8</Text>
        </View>
        <Card.Title h4 h4Style={{fontWeight:'bold' , color:ColorsCustom.primary}}>100.000.000</Card.Title>
        <View style={{flexDirection:'row' , alignItems: "center" , justifyContent: "space-evenly"}}>
        <Text style={{fontWeight:'bold' ,fontSize:20}}>+12%</Text>
        <MaterialCommunityIcons name="chart-timeline-variant" size={34} color="green" />
        </View>
      </Card>

      <Card
        containerStyle={{
          width: "50%",
          marginRight: 10,
          borderTopColor: "red",
          borderStyle: "solid",
          borderTopWidth: 10,
          borderRadius: 10,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text>Chi tiêu tháng 8</Text>
        </View>

        <Card.Title h4 h4Style={{fontWeight:'bold' , color:ColorsCustom.primary}}>100.000</Card.Title>
        <View style={{flexDirection:'row' , alignItems: "center" , justifyContent: "space-evenly"}}>
        <Text style={{fontWeight:'bold' ,fontSize:20}}>-10%</Text>
        <MaterialCommunityIcons name="chart-timeline-variant" size={34} color="green" />
        </View>
      </Card>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "nowrap",
        padding:10,
        paddingTop:0,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    margin: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    
  }
});
