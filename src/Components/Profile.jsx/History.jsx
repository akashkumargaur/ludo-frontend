import { Button, Stack, Text, VStack,FormLabel,Input,FormControl, NumberInputField, NumberInput, HStack, useMediaQuery, Grid, GridItem, Image, Heading, Box, Avatar, Tag, TagLeftIcon, TagLabel, Center, Flex, Square, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../Assests/logo-img.png"
import trophy from "../../Assests/trophy.svg"
import play from "../../Assests/play.svg"
import Commion from '../Layout/Commion'
import { RiInformationFill, RiTrophyFill, RiTrophyLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'

const History = ({isAuthenticated=false,user}) => {
    const [isLargerThan800] = useMediaQuery('(min-width: 900px)', {
        ssr: true,
        fallback: false, // return false on the server, and re-evaluate on the client side
      })

      const { challenge, message, error ,loading } = useSelector(state => state.challenge);

  return (
    <section className='home'>
      <div className='container'>
        <Stack
            height='full' width="100%" m={0} p={0}  overflow='auto'
        >
          {isLargerThan800 ? (<Grid templateColumns='repeat(2, 1fr)' gap={6} >
          <GridItem  h='fit-content'  borderRight='2px' borderColor='#D2D2D2'   >
          <Box>
              <Flex mt='3%' color='white'>
              <Center w='10%'>
              <Box borderBottom="1px solid black" width="100%" />
              </Center>
              <Square  size='80%'>
                <Flex>
                  <Image   src={trophy} alt='logo' />
                  <Text px='2' color={'black'} noOfLines={1} textAlign={'center'} >Your Current Challenges </Text>
                  <Image   src={trophy} alt='logo' />
                </Flex>
              </Square>
              <Center w='10%'>
              <Box borderBottom="1px solid black" width="100%" />
              </Center>
              </Flex>
              <VStack border='2px'  borderRadius='lg' borderColor='#D2D2D2' color='black'  width={'80%'} mt='2rem' mx='10%' >
                  <Box fontFamily={['Poppins,sans-serif']} px='0' mx='0' >
                    <Box borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
                      <Text  py='2' fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} fontWeight={'bold'} > Currently Playing: Count  </Text>
                    </Box>
                    <Flex>
                      <Box p='4' bg='red.400'>
                        <Image   src={trophy} alt='logo' />
                        <Text color={'black'} children='₹30' />
                      </Box>
                      <Spacer />
                      <Box p='4' bg='green.400'>
                        Box 2
                      </Box>
                    </Flex>
                  </Box>     
              </VStack>
            </Box>
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
              <Flex mt='3%' color='white'>
              <Center w='20%'>
              <Box borderBottom="1px solid black" width="100%" />
              </Center>
              <Square  size='60%'>
                <Flex>
                  <Image   src={trophy} alt='logo' />
                  <Text px='2' color={'black'} noOfLines={1} fontWeight={'bold'} textAlign={'center'} >Challenges </Text>
                  <Image   src={trophy} alt='logo' />
                </Flex>
              </Square>
              <Center w='20%'>
              <Box borderBottom="1px solid black" width="100%" />
              </Center>
              </Flex>
              <VStack border='2px'  borderRadius='lg' borderColor='#B5B5B5' color='black'  width={'80%'} mt='2rem' mx='10%' >
                  <Box w='100%' fontFamily={['Poppins,sans-serif']} px='0' mx='0' >
                    <Box borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
                      <Text pl='4%'  py='2' fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} fontWeight={'bold'} > Currently Playing: Count  </Text>
                    </Box>
                    <Flex>
                      <Square p='4'>
                        <Image   src={play} alt='logo' />
                        <Text pl='2%' color={'black'} children='₹30' />
                      </Square>
                      <Spacer />
                      <Box p='4' >
                      <Button colorScheme='blue'>Play</Button>
                      </Box>
                    </Flex>
                  </Box>     
              </VStack>
              <VStack border='2px'  borderRadius='lg' borderColor='#B5B5B5' color='black'  width={'80%'} mt='2rem' mx='10%' >
                  <Box w='100%' fontFamily={['Poppins,sans-serif']} px='0' mx='0' >
                    <Box borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
                      <Text pl='4%'  py='2' fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} fontWeight={'bold'} > Currently Playing: Count  </Text>
                    </Box>
                    <Flex>
                      <Square p='4'>
                        <Image   src={play} alt='logo' />
                        <Text pl='2%' color={'black'} children='₹40' />
                      </Square>
                      <Spacer />
                      <Box p='4' >
                      <Button colorScheme='blue'>Play</Button>
                      </Box>
                    </Flex>
                  </Box>     
              </VStack>
              <VStack border='2px'  borderRadius='lg' borderColor='#B5B5B5' color='black'  width={'80%'} mt='2rem' mx='10%' >
                  <Box w='100%' fontFamily={['Poppins,sans-serif']} px='0' mx='0' >
                    <Box borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
                      <Text pl='4%'  py='2' fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} fontWeight={'bold'} > Currently Playing: Count  </Text>
                    </Box>
                    <Flex>
                      <Square p='4'>
                        <Image   src={play} alt='logo' />
                        <Text pl='2%' color={'black'} children='₹50' />
                      </Square>
                      <Spacer />
                      <Box p='4' >
                      <Button colorScheme='blue'>Play</Button>
                      </Box>
                    </Flex>
                  </Box>     
              </VStack>
              <VStack border='2px'  borderRadius='lg' borderColor='#B5B5B5' color='black'  width={'80%'} mt='2rem' mx='10%' >
                  <Box w='100%' fontFamily={['Poppins,sans-serif']} px='0' mx='0' >
                    <Box borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
                      <Text pl='4%'  py='2' fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} fontWeight={'bold'} > Currently Playing: Count  </Text>
                    </Box>
                    <Flex>
                      <Square p='4'>
                        <Image   src={play} alt='logo' />
                        <Text pl='2%' color={'black'} children='₹100' />
                      </Square>
                      <Spacer />
                      <Box p='4' >
                      <Button colorScheme='blue'>Play</Button>
                      </Box>
                    </Flex>
                  </Box>     
              </VStack>
              <VStack border='2px'  borderRadius='lg' borderColor='#B5B5B5' color='black'  width={'80%'} mt='2rem' mx='10%' >
                  <Box w='100%' fontFamily={['Poppins,sans-serif']} px='0' mx='0' >
                    <Box borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
                      <Text pl='4%'  py='2' fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} fontWeight={'bold'} > Currently Playing: Count  </Text>
                    </Box>
                    <Flex>
                      <Square p='4'>
                        <Image   src={play} alt='logo' />
                        <Text pl='2%' color={'black'} children='₹150' />
                      </Square>
                      <Spacer />
                      <Box p='4' >
                      <Button colorScheme='blue'>Play</Button>
                      </Box>
                    </Flex>
                  </Box>     
              </VStack>
              <VStack border='2px'  borderRadius='lg' borderColor='#B5B5B5' color='black'  width={'80%'} mt='2rem' mx='10%' mb='10%' >
                  <Box w='100%' fontFamily={['Poppins,sans-serif']} px='0' mx='0' >
                    <Box borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
                      <Text pl='4%'  py='2' fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} fontWeight={'bold'} > Currently Playing: Count  </Text>
                    </Box>
                    <Flex>
                      <Square p='4'>
                        <Image   src={play} alt='logo' />
                        <Text pl='2%' color={'black'} children='₹200' />
                      </Square>
                      <Spacer />
                      <Box p='4' >
                      <Button colorScheme='blue'>Play</Button>
                      </Box>
                    </Flex>
                  </Box>     
              </VStack>
            </Box>
          )}
        </Stack>
      </div>
    </section>
  )
}

export default History