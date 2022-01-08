import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Animated,TouchableOpacity } from 'react-native';
import { ItemList } from './item/ItemList';
import { Ionicons } from '@expo/vector-icons'; 

export default function App() {
  return (
        <View style={styles.container}>
          <StatusBar translucent={true} backgroundColor="transparent" style='light'/>
          <ItemList/>
          <View style={{flexDirection: 'row',position: 'absolute',top: 30,right: 0,marginHorizontal: 10}}>
                <TouchableOpacity onPress={()=>{}} activeOpacity={1}>
                    <Ionicons name="menu" size={50} color="black" />
                </TouchableOpacity>
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
