import {
  Heading,
  Container,
  Box,
  Image,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import { useState, useEffect, useRef, useContext } from 'react'
import { DogInfo } from '../lib/dog-context'
import Card from '../components/card'
import Layout from '../components/layouts/article'
import LoadingPage from '../components/spinner'
import NoData from '../components/no-data'

const Page = () => {
  const { setInfo } = useContext(DogInfo) // store dog info for later use
  const [loading, setLoading] = useState(false)
  const [dogInfo, setDogInfo] = useState([])

  const searchOffset = useRef(0)

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://cor-proxy.herokuapp.com/https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_kind=${encodeURIComponent(
        '狗'
      )}&$top=20&$skip=${searchOffset.current}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        }
      }
    )
      .then(res => res.json())
      .then(res => {
        setDogInfo(res)
        setLoading(false)
      })
  }, [])

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={4} // padding 4
          mb={6}
          align="left"
        >
          {`I'm a dog person thus I figure if I can help those poppies while I can practice my coding skill
        it will be great`}
        </Box>
        <Box display={{ md: 'flex' }} mb={10}>
          <Box flexGrow={1}>
            <Heading as="h2" fontSize={20} variant="page-title">
              {`This is my dog, his name is liang liang`}
            </Heading>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              borderRadius="full"
              src="/images/liangliang_1.jpg"
              alt="My Dog's picture"
            />
          </Box>
        </Box>

        {loading ? (
          <LoadingPage />
        ) : dogInfo.length > 0 ? (
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            {dogInfo.map(res => {
              return (
                <Card
                  key={res.animal_subid}
                  thumbnail={
                    res.album_file === ''
                      ? '/images/dogPlaceholder.png'
                      : res.album_file
                  }
                  animal_info={res}
                  title={res.animal_place}
                  handleSelection={setInfo}
                />
              )
            })}
          </SimpleGrid>
        ) : (
          <NoData />
        )}
      </Container>
    </Layout>
  )
}

export default Page
