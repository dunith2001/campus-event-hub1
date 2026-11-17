import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
export default function Screen({ children }) { return <SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.content}>{children}</ScrollView></SafeAreaView>; }
const styles=StyleSheet.create({safe:{flex:1,backgroundColor:'#f1f5f9'},content:{padding:20,paddingBottom:45}});
