import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import Screen from '../../components/Screen';
import { events } from '../../data/events';
import { useEvents } from '../../context/EventContext';
export default function Home() { const router=useRouter();const {savedIds}=useEvents();return <Screen>
 <Text style={styles.kicker}>WELCOME TO CAMPUS</Text><Text style={styles.heading}>Discover what’s happening 🎓</Text>
 <Image source={{uri:'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900'}} style={styles.hero} accessibilityLabel="University campus" />
 <View style={styles.row}><View style={styles.stat}><Text style={styles.number}>{events.length}</Text><Text>Upcoming events</Text></View><View style={styles.stat}><Text style={styles.number}>{savedIds.length}</Text><Text>Saved events</Text></View></View>
 <Text style={styles.subheading}>Explore events and workshops</Text><Text style={styles.body}>Browse campus activities, read the details, and bookmark events you want to attend.</Text>
 <Pressable style={styles.button} onPress={() => router.push('/events')}><Text style={styles.buttonText}>Browse all events →</Text></Pressable>
 </Screen>;}
const styles=StyleSheet.create({kicker:{fontSize:12,color:'#2563eb',fontWeight:'800',marginBottom:8},heading:{fontSize:28,fontWeight:'800',color:'#0f172a',marginBottom:20},hero:{width:'100%',height:180,borderRadius:18,backgroundColor:'#dbeafe'},row:{flexDirection:'row',gap:12,marginVertical:18},stat:{flex:1,backgroundColor:'#fff',padding:16,borderRadius:14},number:{fontSize:28,color:'#2563eb',fontWeight:'800'},subheading:{fontSize:19,fontWeight:'700',color:'#0f172a',marginTop:8},body:{color:'#475569',lineHeight:23,marginTop:8},button:{backgroundColor:'#2563eb',padding:16,borderRadius:12,marginTop:22},buttonText:{color:'#fff',textAlign:'center',fontWeight:'800'}});
