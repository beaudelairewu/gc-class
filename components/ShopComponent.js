import React, {useState, useEffect} from 'react'
import { db } from '../firebase'
import { StyleSheet, Text, View } from 'react-native';

export default function ShopComponent() {
    const [shopminders, setShopminders] = useState([])
    useEffect(() =>{
        db.shopminders
        .onSnapshot((querySnapshot) => {
        const obj = [];
        querySnapshot.forEach((doc) => {
            obj.push({
                id:doc.id,
                ...doc.data()
            })
        });
        console.log("data: ", obj.join(", "));
        setShopminders(obj)
    });
    }, [])
    return (
        <View>
            {shopminders.map((obj)=>(
                <View key={obj.id}>
                    <Text>{obj.name}</Text>
                    <Text>{obj.surname}</Text>
                </View>
            ))}
        </View>
    )
}
