import NextLink from 'next/link'
import { Box, Image, LinkBox, Text } from '@chakra-ui/react'

const Card = ({ children, thumbnail, title, animal_info, handleSelection }) => (
  <Box w="100%" textAlign="center" borderRadius="lg" p={4}>
    <NextLink
      href={{ pathname: `/details`, query: { animal_info: animal_info } }}
      passHref
    >
      <LinkBox cursor="pointer" onClick={() => handleSelection(animal_info)}>
        <Image
          borderRadius="lg"
          w="100%"
          maxH="100"
          objectFit="cover"
          src={thumbnail}
          alt={`pic of dog`}
          placeholder="blur"
        />
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export default Card

