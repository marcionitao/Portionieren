import { VStack } from '@gluestack-ui/themed'
import { AccountTotal } from '../components/AccountTotal'
import { Person } from '../components/Person'

export function Home() {
  return (
    <VStack flex={1} bg="$black">
      <AccountTotal />
      <Person data={{ id: '1', name: 'Marcio' }} />
    </VStack>
  )
}
