import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text, 
  View,
  Animated,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
  TextInput
} from 'react-native';
import { ItemList } from './item/ItemList';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const {width,height} = Dimensions.get("screen");
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;
export default function App() {

const [modalVisible,setModalVisible] = React.useState(false);

  return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <StatusBar translucent={true} backgroundColor="transparent" style='light'/>

            <ItemList/>
            <View style={{flexDirection: 'row',position: 'absolute',top: 30,right: 0,marginHorizontal: 10}}>
                  <TouchableOpacity onPress={()=>{}} activeOpacity={1}>
                      <Ionicons name="menu" size={50} color="black" />
                  </TouchableOpacity>
            </View>

            <View style={{height: SCREEN_HEIGHT/2,width: '100%',backgroundColor: 'black'}}></View>
            <View style={{position: 'absolute',top: SCREEN_HEIGHT* 0.8,right: 10, width: 80,height: 80,backgroundColor: '#c32530',borderRadius: 50,justifyContent: 'center',alignItems: 'center'}}>
              <TouchableOpacity onPress={()=>{setModalVisible(!modalVisible)}}>
                  {/* <Ionicons name="add" size={40} color="black" /> */}
                  <MaterialCommunityIcons name="comment-question-outline" size={40} color="black" />
              </TouchableOpacity>
            </View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              statusBarTranslucent={true}
              // hardwareAccelerated={true}
            >
              <View style={{flex: 1,backgroundColor: 'black',justifyContent:"center",alignItems: 'center'}}>
                
                <TouchableOpacity style={{position: 'absolute', top: 60,right: 30}} onPress={()=>{setModalVisible(false)}}>
                  <Ionicons name="close-circle" size={30} color="white"/>
                </TouchableOpacity>
                <View style={{padding: 25}}>
                  <Text style={{fontSize: 80,color: 'white',textTransform: 'uppercase'}}>
                    How can I help  you {'\n'}today?
                  </Text>
                </View>
                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                    <TextInput style={{backgroundColor: 'pink', width: 315,height: 50,paddingLeft: 20,letterSpacing: 2}} placeholder='SEARCH'/>
                    {/* <TouchableOpacity>
                      <Ionicons name="search" size={45} color={'pink'} style={{marginLeft: 10}}/>
                    </TouchableOpacity> */}
                </View>
              </View>
            </Modal>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
