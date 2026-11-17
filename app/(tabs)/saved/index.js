import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { events } from '../../../data/events';
import { useEvents } from '../../../context/EventContext';
import EventCard from '../../../components/EventCard';
export default function Saved(){const {savedIds}=useEvents();const saved=events.filter(e=>savedIds.includes(e.id));return <SafeAreaView style={s.page}><Text style={s.title}>Your saved events ({saved.length})</Text><FlatList data={saved} keyExtractor={e=>e.id} renderItem={({item})=><EventCard event={item}/>} ListEmptyComponent={<Text style={s.empty}>Nothing saved yet. Browse Events and bookmark something interesting!</Text>}/></SafeAreaView>}
const s=StyleSheet.create({page:{flex:1,backgroundColor:'#f1f5f9',padding:20},title:{fontSize:22,fontWeight:'800',marginBottom:18,color:'#0f172a'},empty:{color:'#64748b',lineHeight:24}});
