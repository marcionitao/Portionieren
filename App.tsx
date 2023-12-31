import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config' // Optional if you want to use default theme
import { StatusBar } from 'expo-status-bar'
import { Home } from './src/screens/Home'

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <StatusBar style="auto" />
      <Home />
    </GluestackUIProvider>
  )
}
