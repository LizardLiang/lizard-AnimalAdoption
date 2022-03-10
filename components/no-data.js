import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import { WarningTwoIcon } from '@chakra-ui/icons'

const NoData = () => (
  <Box w="100%" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
    <Text
      h="50"
      borderRadius="lg"
      align="center"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <WarningTwoIcon mr={6} />
      Currently No Data
    </Text>
  </Box>
)

export default NoData

