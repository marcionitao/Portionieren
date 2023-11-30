import {
  Avatar,
  AvatarFallbackText,
  Checkbox,
  CheckboxIcon,
  CheckIcon,
  HStack,
  Text,
} from '@gluestack-ui/themed'

interface Props {
  data: {
    id: string
    name: string
  }
}
export function Person({ data }: Props) {
  return (
    <HStack
      h="$12"
      justifyContent="space-between"
      w="$full"
      alignItems="center"
    >
      <HStack alignItems="center" gap="$2">
        <Avatar bgColor="$secondary700">
          <AvatarFallbackText>{data.name}</AvatarFallbackText>
        </Avatar>

        <Text size="md" color="$white">
          {data.name}
        </Text>
      </HStack>
      <Checkbox value={data.id} size="md" aria-label={data.name}>
        <Checkbox.Indicator mr="$2">
          <CheckboxIcon as={CheckIcon} />
        </Checkbox.Indicator>
      </Checkbox>
    </HStack>
  )
}
