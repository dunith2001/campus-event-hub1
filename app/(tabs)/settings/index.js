import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Screen from '../../../components/Screen';
import { useEvents } from '../../../context/EventContext';
export default function Settings(){const {lastReturn}=useEvents();return <Screen><Text style={s.title}>App status & information</Text><Text style={s.heading}>AppState monitor</Text><Text style={s.card}>{lastReturn}</Text><Text style={s.body}>To test: leave this app using the Home button, wait a moment, then reopen it. This message updates when the app becomes active again.</Text><Text style={s.heading}>Notifications</Text><Text style={s.body}>Bookmark an event in the Events tab to request notification permission and trigger a local notification. Test on a physical Android or iOS device.</Text><Text style={s.heading}>About</Text><Text style={s.body}>Campus Event Hub • React Native / Expo Router • Assignment 01</Text></Screen>}
const s=StyleSheet.create({title:{fontSize:24,fontWeight:'800',color:'#0f172a',marginBottom:22},heading:{fontSize:18,fontWeight:'800',marginTop:20,marginBottom:10},card:{backgroundColor:'#dbeafe',color:'#1e40af',padding:18,borderRadius:14},body:{color:'#475569',lineHeight:24}});
