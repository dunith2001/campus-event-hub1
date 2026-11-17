import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
export default function EventCard({ event }) {
 const router = useRouter();
 return <Pressable accessibilityRole="button" onPress={() => router.push(`/events/${event.id}`)} style={styles.card}>
  <Text style={styles.emoji}>{event.emoji}</Text><View style={{ flex: 1 }}><Text style={styles.category}>{event.category}</Text><Text style={styles.title}>{event.title}</Text><Text style={styles.meta}>{event.date}  •  {event.time}</Text><Text style={styles.meta}>{event.venue}</Text></View><Text style={styles.arrow}>›</Text>
 </Pressable>;
}
const styles=StyleSheet.create({card:{flexDirection:'row',alignItems:'center',backgroundColor:'#fff',padding:16,borderRadius:16,marginBottom:12,borderWidth:1,borderColor:'#e2e8f0'},emoji:{fontSize:30,marginRight:14},category:{color:'#2563eb',fontWeight:'700',fontSize:12},title:{fontSize:16,fontWeight:'700',color:'#0f172a',marginVertical:4},meta:{color:'#64748b',fontSize:12,marginTop:2},arrow:{fontSize:28,color:'#94a3b8',marginLeft:8}});
