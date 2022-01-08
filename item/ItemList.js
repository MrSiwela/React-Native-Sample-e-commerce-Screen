import * as React from 'react';
import { StyleSheet,FlatList,Animated,View,Text,Image,Dimensions,TouchableOpacity } from "react-native";
import {ITEMS} from './items';


const {width,height} = Dimensions.get("screen");
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

export const ItemList = ()=>{

    const scrollX = React.useRef(new Animated.Value(0)).current;

    // const inputRange = [-1,0,1];
    // const translateX = scrollX.interpolate({
    //     inputRange,
    //     outputRange: [150,0,-150]
    // })


    return(
        <View style={styles.container}>
            <FlatList
            style={{height: SCREEN_HEIGHT/2}}
                data={ITEMS}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                snapToInterval={SCREEN_WIDTH}
                scrollEventThrottle={60}
                decelerationRate={0}
                keyExtractor={(item)=> item.key}
                contentContainerStyle={{alignItems: 'center'}}
                renderItem={({item,index})=>{

                    const inputRange = [index-1,index,index+1];
                    const translateX = scrollX.interpolate({
                        inputRange,
                        outputRange: [150,0,-150]
                    });
                    const opacity = scrollX.interpolate({
                        inputRange: [(index-1)*SCREEN_WIDTH,index * SCREEN_WIDTH,(index+1)*SCREEN_WIDTH],
                        outputRange: [0.4,0.9,0.4]
                    });
                    return(
                        
                        <TouchableOpacity activeOpacity={1} key={item.id} style={{ width: SCREEN_WIDTH,height: 300,justifyContent: 'center',alignItems: 'center'}}>
                            <View style={{width: 200,height: 200,backgroundColor: 'purple'}}>
                                <Image source={item.image} resizeMode="contain" style={{width: '100%',height: '100%'}}/>
                            </View>
                            <View style={{flexDirection: 'row',width: '50%',justifyContent: 'space-between'}}>
                                <Text style={{fontSize: 16,color: 'white'}}>{item.name}</Text>
                                <Text style={{fontSize: 16,color: 'white'}}>{item.price}</Text>
                            </View>
                            <View style={{position: 'absolute',right: 0,transform: [{rotateZ: '-90deg'}]}}>
                                <Text style={{fontSize: 30,color: 'white'}}>DISCOUNT</Text>
                            </View>
                            {/* <Animated.View style={{position: 'absolute',left: 0,transform: [{rotateZ: '-90deg'}],justifyContent: 'center',alignItems: 'center',backgroundColor: 'pink'}}>
                                <Text style={{fontSize: 80,fontWeight: 'bold'}}>{item.discount}</Text>
                            </Animated.View> */}
                            <View style={{position: 'absolute',left: 10,width: 100,height: 150,backgroundColor: 'pink'}}>
                            {ITEMS.map((discountItem,i)=>{
                                                return(
                                                    <Animated.View key={i} style={{width: 150,height: 150,transform: [{rotateZ: '-90deg'},{translateX}]}}>
                                                        <Text key={{item}} style={{fontSize: 80,fontWeight: 'bold',textAlign: 'center'}}>{discountItem.discount}</Text>
                                                    </Animated.View>    
                                                )
                                            })}
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />

            {/* <Animated.View style={{position: 'absolute',left: 0,height: 100,justifyContent: 'center',alignItems: 'center',backgroundColor: 'pink',transform: [{rotateZ: '-90deg'},{translateX}]}}>
            {ITEMS.map((discountItem,index)=>{
                                return(
                                    <View key={index} >
                                        <Text style={{fontSize: 80,fontWeight: 'bold'}}>{discountItem.discount}</Text>
                                    </View>    
                                )
                            })}
            </Animated.View> */}

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c32530',
        width: '100%'
    },
})
