import { useRouter } from 'next/router'
import { Container, Head, Box } from '@chakra-ui/react'

const Details = ({}) => {
  const _router = useRouter()
  const { query } = _router
  return (
    <Container>
      <Box w="100%">{query.animal_kind}</Box>
    </Container>
  )
}

export default Details

