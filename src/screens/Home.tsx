import { VStack, Divider } from '@gluestack-ui/themed'
import { AccountTotal } from '../components/AccountTotal'
import { Person } from '../components/Person'
import * as Contacts from 'expo-contacts'
import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

export function Home() {
  // crinado o estado para armazenar a lista de contatos
  const [contacts, setContacts] = useState<Contacts.Contact[]>([])
  async function fetchContacts() {
    try {
      // 1º passo: pedir permissão ao usuário para acessar os contatos
      const { status } = await Contacts.requestPermissionsAsync()
      if (status === 'granted') {
        // 2º passo: se for permitido, buscar os contatos
        const { data } = await Contacts.getContactsAsync()
        setContacts(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  return (
    <VStack flex={1} bg="$black">
      <AccountTotal />

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Person data={item} />}
        ItemSeparatorComponent={() => (
          <Divider my="$4" bgColor="$secondary700" />
        )}
        contentContainerStyle={{
          paddingBottom: 100,
          padding: 24,
        }}
      />
    </VStack>
  )
}
