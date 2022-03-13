import NextLink from 'next/link'
import { Heading, Box, Link, Image, Badge, Text, Grid } from '@chakra-ui/react'
import { StyledDiv } from './section'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box mb={0} mt={5}>
    <NextLink href="/" passHref>
      <Link>Homepage</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {`ID ${children}`}
    </Heading>
  </Box>
)

export const Thumbnail = ({ thumbnail }) => (
  <Box align="center" mb={6}>
    <Image
      src={thumbnail}
      alt="animal thumbnail"
      maxW="100%"
      maxH="300px"
      objectFit="cover"
      borderRadius="lg"
    />
  </Box>
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2} borderRadius="full" px={2} py={0.5}>
    {children}
  </Badge>
)

export const InfoBox = ({ title, text }) => (
  <Box align="center" mb={2}>
    <Grid
      templateColumns={{ base: '1fr', md: '5fr 5fr' }}
      w={{ base: '50%', md: '70%', lg: '70%' }}
      align="left"
      gap={4}
    >
      <Box>
        <Meta>{title}</Meta>
      </Box>
      <Text display="inline-block">{text}</Text>
    </Grid>
  </Box>
)

export const InfoSection = ({ children, title, delay = 0 }) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
  >
    <Heading variant="info-title" mb={2}>
      {title}
    </Heading>
    {children}
  </StyledDiv>
)
