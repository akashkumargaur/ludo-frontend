import { Button, Stack, Text, VStack,FormLabel,Input,FormControl, NumberInputField, NumberInput, HStack, useMediaQuery, Grid, GridItem, Image, Heading, Box, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../Assests/logo-img.png"
import Header from '../Layout/Header'

const Wallet = () => {

    const [isLargerThan800] = useMediaQuery('(min-width: 900px)', {
        ssr: true,
        fallback: false, // return false on the server, and re-evaluate on the client side
      })

  return (
    <section className='home'>
      <div className='container'>
        <Stack
            height='full' width="100%" m={0} p={0}  overflow='auto'
        >
          {isLargerThan800 ? (<Grid templateColumns='repeat(2, 1fr)' gap={6} >
          <GridItem  h='fit-content'  borderRight='2px' borderColor='#D2D2D2'   >
            <Header/>
              <VStack border='2px'  borderRadius='lg' borderColor='#D2D2D2' color='black' width={'50%'} mt='2rem' ml='7rem' >
                <form fontFamily={['Poppins,sans-serif']}>
                <FormControl borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
                  <Text pl='4rem' py='2' fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} fontWeight={'bold'}  children="Deposit Chips" />
                </FormControl>
                  <Box w='100%' mt='5%' bg='blue.200'  >
                    <Text color={'blue.600'} > यह Buy की गई चिप्स है इनसे सिर्फ़ गेम खेले जा सकते है ॥ Bank या UPI में निकाला नहीं जा सकता |</Text>
                  </Box>
                  <Box w='100%' mt='5%'   >
                    <Box >
                        <Text pl='30%' >Chips 0.00</Text>
                        <Button m='5%' width={'80%'} backgroundColor={'blue.600'} color={'white'} children='Add'  />
                    </Box>
                  </Box>
                </form>
              </VStack>
              <VStack border='2px'  borderRadius='lg' borderColor='#D2D2D2' color='black' h={'fit-content'} width={'50%'} mt='2rem' ml='7rem' >
              <form fontFamily={['Poppins,sans-serif']}>
                <FormControl borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
                  <Text pl='4rem' py='2' fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} fontWeight={'bold'}  children="Winning Chips" />
                </FormControl>
                  <Box w='100%' mt='5%' bg='blue.200'  >
                    <Text color={'blue.600'} > यह चिप्स गेम से जीती हुई एवं रेफरल से कमाई हुई है इन्हें Bank या UPI में निकाला जा सकता है ॥ इन चिप्स से गेम भी खेला जा सकता है|</Text>
                  </Box>
                  <Box w='100%' mt='5%'   >
                    <Box >
                        <Text pl='30%' >Chips 0.00</Text>
                        <Button m='5%' width={'80%'} backgroundColor={'blue.600'} color={'white'}  children='Withdraw'  />
                    </Box>
                  </Box>
                </form>
              </VStack>
              <Button  mt='2rem' ml='7rem'  bg='#F14F4D' textColor='white'  fontFamily={['Poppins,sans-serif']} fontWeight={'bold'} children='Logout' />
            </GridItem>
            <GridItem w='100%' mt='5rem' h='10' flex={1}  >
              <Image boxSize={'250px'} justifyContent={'center'}    src={img} alt='logo' />
              <Heading p={['2','5']}  fontFamily={['Poppins,sans-serif']} textColor='#F14F4D' children='PLAY STAR KING LUDO & WIN REAL CASH!' />
              <Heading p={['2','5']}  fontFamily={['Poppins,sans-serif']} textColor='black' fontWeight={'light'} >
                For best experience, open starkingludo.com on  chrome mobile  
              </Heading>
            </GridItem>
          </Grid>) : (
            <Box>
            <VStack border='2px'  borderRadius='lg' borderColor='#D2D2D2' color='black' width={'80%'} mt='2rem' mx='10%' >
                <form fontFamily={['Poppins,sans-serif']}>
                <FormControl borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
                  <Text textAlign={'center'} py='2' fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} fontWeight={'bold'}  children="Deposit Chips" />
                </FormControl>
                  <Box w='100%' mt='5%' bg='blue.200'  >
                    <Text color={'blue.600'} > यह चिप्स  Win एवं Buy की गई चिप्स है इनसे सिर्फ़ गेम खेले जा सकते है ॥ Bank या UPI में निकाला नहीं जा सकता |</Text>
                  </Box>
                  <Box w='100%' mt='5%'   >
                    <Box >
                        <Text textAlign={'center'} >Chips 0.00</Text>
                        <Button m='5%' width={'80%'} backgroundColor={'blue.600'} color={'white'} children='Add'  />
                    </Box>
                  </Box>
                </form>
              </VStack>
              <VStack border='2px'  borderRadius='lg' borderColor='#D2D2D2' color='black' h={'fit-content'} width={'80%'} mt='2rem' mx='10%' >
              <form fontFamily={['Poppins,sans-serif']}>
                <FormControl borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
                  <Text textAlign={'center'} py='2' fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} fontWeight={'bold'}  children="Winning Chips" />
                </FormControl>
                  <Box w='100%' mt='5%' bg='blue.200'  >
                    <Text color={'blue.600'} > यह चिप्स गेम से जीती हुई एवं रेफरल से कमाई हुई है इन्हें Bank या UPI में निकाला जा सकता है ॥ इन चिप्स से गेम भी खेला जा सकता है|</Text>
                  </Box>
                  <Box w='100%' mt='5%'   >
                    <Box >
                        <Text textAlign={'center'} >Chips 0.00</Text>
                        <Button m='5%' float={'center'} width={'80%'} backgroundColor={'blue.600'} color={'white'}  children='Withdraw'  />
                    </Box>
                  </Box>
                </form>
              </VStack>
              <Button  mt='2rem' w='80%' mx='10%'  bg='#F14F4D' textColor='white'  fontFamily={['Poppins,sans-serif']} fontWeight={'bold'} children='Logout' />
            </Box>
          )}
        </Stack>
      </div>
    </section>
  )
}

export default Wallet