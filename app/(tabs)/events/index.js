import React, { useState } from 'react';
import { FlatList, Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import EventCard from '../../../components/EventCard';
import { events } from '../../../data/events';
const categories=['All','Workshop','Career','Academic','Community'];
export default function Events(){const [category,setCategory]=useState('All');const [open,setOpen]=useState(false);const visible=category==='All'?events:events.filter(e=>e.category===category);return <SafeAreaView style={s.page}>
 <Text style={s.title}>Find your next event</Text><Pressable style={s.filter} onPress={()=>setOpen(true)}><Text style={s.filterText}>Filter: {category}  ▾</Text></Pressable>
 <FlatList data={visible} keyExtractor={item=>item.id} renderItem={({item})=><EventCard event={item}/>} contentContainerStyle={{paddingBottom:32}} ListEmptyComponent={<Text>No events in this category.</Text>}/>
 <Modal visible={open} transparent animationType="fade" onRequestClose={()=>setOpen(false)}><View style={s.overlay}><View style={s.dialog}><Text style={s.title}>Choose category</Text>{categories.map(item=><Pressable key={item} style={s.option} onPress={()=>{setCategory(item);setOpen(false)}}><Text style={{color:item===category?'#2563eb':'#0f172a',fontWeight:'600'}}>{item}</Text></Pressable>)}<Pressable onPress={()=>setOpen(false)}><Text style={s.close}>Cancel</Text></Pressable></View></View></Modal>
 </SafeAreaView>}
const s=StyleSheet.create({page:{flex:1,padding:20,backgroundColor:'#f1f5f9'},title:{fontSize:22,fontWeight:'800',marginBottom:16,color:'#0f172a'},filter:{backgroundColor:'#dbeafe',padding:12,borderRadius:10,marginBottom:18},filterText:{color:'#1d4ed8',fontWeight:'700'},overlay:{flex:1,backgroundColor:'#0008',justifyContent:'center',padding:24},dialog:{backgroundColor:'#fff',padding:22,borderRadius:20},option:{paddingVertical:14,borderBottomWidth:1,borderColor:'#e2e8f0'},close:{textAlign:'center',color:'#2563eb',marginTop:18,fontWeight:'700'}});
