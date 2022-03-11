import React from 'react';
import {View, Text} from 'react-native';


export default function ResultImc({resultImc, messageResultImc}){
    return(
        <View>
            <Text>{messageResultImc}</Text>
            <Text>{resultImc}</Text>
            
        </View>
    )
}