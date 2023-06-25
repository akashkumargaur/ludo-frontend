import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Commion = () => {
  return (
    <>
    <HStack mt='2%' mb='2%' border={1} borderRadius={1}   height={["5vh","5vh"]} width={"100%"}  backgroundColor={'white'} bgColor={'#DC2121'}   bottom={"2rem"} borderBottom='2px' borderColor='#D2D2D2' >
        <Text textAlign={'center'} pl='5%' noOfLines={1} fontSize={['sm','200px']} color={'white'} fontFamily={'Inter'} children='Breaking News: Commission 3% for all games . ' />
      </HStack>
    </>
  )
}

export default Commion