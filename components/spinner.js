import { Box, Spinner } from '@chakra-ui/react'

const LoadingPage = () => {
  return (
    <Box
      m="auto"
      mt={['-20px', '-60px', '-120px']}
      mb={['-40px', '-140px', '-200px']}
      w={[280, 480, 460]}
      h={[280, 480, 460]}
      position="relative"
    >
      <Spinner
        size="xl"
        position="absolute"
        left="50%"
        top="50%"
        ml="calc(0px - var(--spinner-size) / 2)"
        mt="calc(0px - var(--spinner-size))"
      />
    </Box>
  )
}

export default LoadingPage

