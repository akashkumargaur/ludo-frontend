import { Box, Button, Heading, HStack, Image, Stack, Text, useMediaQuery, VStack  } from '@chakra-ui/react'
import React from 'react'
import img from "../../Assests/instant withdrawal.png"
import dice  from "../../Assests/dice.png"
import "./home.css"
import { RiCustomerServiceFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 900px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })
  const navigate=useNavigate();

  const handlePlayNow=(e)=>{
    e.preventDefault();
    navigate("/play");
  }

  return (
    <section className='home'>
      <div className='container'>
        <Stack
            height='90vh' width="100%" m={0} p={0} overflow={'auto'}
        >
          {isLargerThan800 ? (
          <Box>
              <VStack border='2px'  borderRadius='lg' borderColor='#D2D2D2' color='black' width={'80%'} mt='1rem' mx='10%'>
          <Image p='1' border={4} borderColor='black' src={img} borderRadius={4} alt="logo" />
          <Text color={'black'} pt='12'px='3' fontFamily={['Poppins,sans-serif']} fontSize={['small','medium']} fontWeight='light' children={"This Game involves an element of financial risk and may be addictive. Please Play responsibly and at your own risk."}/>
              </VStack>
              <HStack position={"absolute"} bottom={'20%'} spacing={"5"} flex={1} pr='2'   justifyContent={"center"}>
            <Button w={'80%'}  bg='black' color={'white'}  variant='solid'>
              Play Now
            </Button>
            <Button w={'10%'} alignItems={'center'}  borderRadius={'full'} leftIcon={<RiCustomerServiceFill height={'10rem'} />} colorScheme='white' backgroundColor={'blue.500'}  variant='unstyled'/>
              </HStack>
            </Box>
          ) : (
            <Box>
              <VStack color='black' width={'80%'} mt='1rem' mx='10%'>
          <Image p='1'  border={4} borderColor='black' src={img} borderRadius={4} alt="logo" />
          <Text color={'black'} pt='12'px='3' fontFamily={['Poppins,sans-serif']} fontSize={['small','medium']} fontWeight='light' children={"This Game involves an element of financial risk and may be addictive. Please Play responsibly and at your own risk."}/>
              </VStack>
              <HStack mt={'50%'}  spacing={"5"} flex={1} pr='2'   justifyContent={"center"}>
            <Button onClick={handlePlayNow} w={'80%'}  bg='black' color={'white'}  variant='solid'>
              Play Now
            </Button>
            <Button w={'10%'} alignItems={'center'}  borderRadius={'full'} leftIcon={<RiCustomerServiceFill height={'10rem'} />} colorScheme='white' backgroundColor={'blue.500'}  variant='unstyled'/>
              </HStack>
            </Box>
          )}
        </Stack>
      </div>
    </section>
  )
}

export default Home