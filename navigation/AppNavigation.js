import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AllowLocationScreen from '../screens/AllowLocationScreen';
import SignInScreen from '../screens/SignInScreen';
import PersonalDetailsScreen from '../screens/PersonalDetailsScreen';
import ContactDetailScreen from '../screens/ContactDetailScreen';
import EmailVerificationScreen from '../screens/EmailVerificationScreen';

const AppNavigation = () => {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name='AllowLocation' component={AllowLocationScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SignIn' component={SignInScreen} options={{ headerShown: false }} />
                <Stack.Screen name='PersonalDetails' component={PersonalDetailsScreen} options={{ headerShown: false }} />
                <Stack.Screen name='ContactDetail' component={ContactDetailScreen} options={{ headerShown: false }} />
                <Stack.Screen name='EmailVerify' component={EmailVerificationScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation

const styles = StyleSheet.create({})