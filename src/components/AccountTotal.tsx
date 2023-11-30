import { VStack, Text, InputField, Input } from '@gluestack-ui/themed'

export function AccountTotal() {
  return (
    <VStack
      w="$full"
      pt="$16"
      bg="$secondary800"
      pb="$10"
      px="$8"
      justifyContent="center"
      alignItems="center"
    >
      <Text size="sm" color="$secondary200" mb="$2">
        Valor Total
      </Text>
      <Input variant="outline" h="$16" borderWidth="$0">
        <InputField
          placeholder="0,00"
          fontSize="$6xl"
          color="$white"
          textAlign="center"
          fontWeight="bold"
          keyboardType="numeric"
        />
      </Input>
    </VStack>
  )
}
