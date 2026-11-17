import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';
const EventContext = createContext(null);
export function EventProvider({ children }) {
  const [savedIds, setSavedIds] = useState([]);
  const [lastReturn, setLastReturn] = useState('No background-to-foreground transition detected yet.');
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextState => {
      if (appState.current.match(/inactive|background/) && nextState === 'active') {
        setLastReturn(`Returned to foreground at ${new Date().toLocaleTimeString()}`);
      }
      appState.current = nextState;
    });
    return () => subscription.remove();
  }, []);
  const toggleSaved = id => setSavedIds(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  return <EventContext.Provider value={{ savedIds, toggleSaved, lastReturn }}>{children}</EventContext.Provider>;
}
export function useEvents() { const value = useContext(EventContext); if (!value) throw new Error('EventProvider missing'); return value; }
