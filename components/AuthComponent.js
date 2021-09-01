import React, {useState, useEffect} from 'react'
import {auth} from '../firebase'
import {View, Text} from 'react-native'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginComponent from './LoginComponent'

export default function AuthComponent() {
    const [signIn, setSignIn] = useState(false)
    const Stack = createStackNavigator()

    auth.onAuthStateChanged((user)=>{
        if(user){
            setSignIn(true)
        }else{
            setSignIn(false)
        }
    });

    console.log(signIn)


    return (
        <>

                {signIn ?
                <Text>Signed In</Text> :
                <Stack.Navigator screenOptions={{}}>
                <Stack.Screen name="Login" component={LoginComponent} options={{title:'Login',}}/>
                </Stack.Navigator>
                }

        </>
    )
}
