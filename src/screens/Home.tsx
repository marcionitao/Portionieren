import { Text, VStack } from '@gluestack-ui/themed'
import { AccountTotal } from '../components/AccountTotal'

export function Home() {
  return (
    <VStack flex={1} bg="$black">
      <AccountTotal />
    </VStack>
  )
}
