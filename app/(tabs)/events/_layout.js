import React from 'react';
import { Stack } from 'expo-router';
export default function EventsLayout(){return <Stack screenOptions={{headerStyle:{backgroundColor:'#fff'},headerTintColor:'#0f172a'}}><Stack.Screen name="index" options={{title:'Explore Events'}}/><Stack.Screen name="[id]" options={{title:'Event Details'}}/></Stack>;}
