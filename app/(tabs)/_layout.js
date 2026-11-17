import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
export default function TabLayout() { return <Tabs screenOptions={({route}) => ({ tabBarActiveTintColor:'#2563eb',headerShown:false,tabBarIcon:({color,size}) => <Ionicons name={({index:'home-outline',events:'calendar-outline',saved:'bookmark-outline',settings:'settings-outline'})[route.name] || 'ellipse-outline'} size={size} color={color} /> })}>
 <Tabs.Screen name="index" options={{title:'Home'}}/><Tabs.Screen name="events" options={{title:'Events'}}/><Tabs.Screen name="saved" options={{title:'Saved'}}/><Tabs.Screen name="settings" options={{title:'Settings'}}/>
 </Tabs>; }
