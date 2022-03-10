import { Box, Image, LinkOverlay, LinkBox, Text } from '@chakra-ui/react'

const Card = ({ children, thumbnail, title }) => (
  <Box w="100%" textAlign="center" borderRadius="lg" p={4}>
    <LinkBox cursor="pointer">
      <Image
        borderRadius="lg"
        w="100%"
        maxH="100"
        objectFit="cover"
        src={thumbnail}
        alt={`pic of dog`}
        placeholder="blur"
      />
      <LinkOverlay href={`/details`} query={{ animal_kind: animal_kind }}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export default Card

