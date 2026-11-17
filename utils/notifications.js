import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
Notifications.setNotificationHandler({ handleNotification: async () => ({ shouldShowBanner: true, shouldShowList: true, shouldPlaySound: true, shouldSetBadge: false }) });
export async function sendBookmarkNotification(title) {
  if (Platform.OS === 'web') throw new Error('Local notifications require an Android or iOS device.');
  if (Platform.OS === 'android') await Notifications.setNotificationChannelAsync('event-reminders', { name: 'Event Reminders', importance: Notifications.AndroidImportance.HIGH });
  let permission = await Notifications.getPermissionsAsync();
  if (!permission.granted) permission = await Notifications.requestPermissionsAsync();
  if (!permission.granted) throw new Error('Notification permission was not granted.');
  await Notifications.scheduleNotificationAsync({ content: { title: 'Event bookmarked!', body: `${title} was added to your saved events.` }, trigger: null });
}
