import { Button, Stack, Text, VStack,FormLabel,Input,FormControl, NumberInputField, NumberInput, HStack, useMediaQuery, Grid, GridItem, Image, Heading, Box, Avatar, Tag, TagLeftIcon, TagLabel, Center, Flex, Square, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../Assests/logo-img.png"
import trophy from "../../Assests/trophy.svg"
import play from "../../Assests/play.svg"
import Commion from '../Layout/Commion'
import { RiArrowLeftLine, RiInformationFill, RiTrophyFill, RiTrophyLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import proileSvg from "../../Assests/Ellipse.svg"

const Playground = () => {

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
                      <Square p='4'>
                        <Button leftIcon={<RiArrowLeftLine/>} colorScheme='blue'>Back</Button>
                      </Square>
                      <Spacer />
                      <Box p='4' >
                        <Button leftIcon={<RiInformationFill/>} colorScheme='blue' variant='outline' >Rules</Button>
                      </Box>
                    </Flex>
              <VStack border='2px'  borderRadius='lg' borderColor='#B5B5B5' color='black'  width={'80%'} mt='2rem' mx='10%' >
                  <Box w='100%' fontFamily={['Poppins,sans-serif']} px='0' mx='0' >
                  <Flex mt='3%' color='white'>
                        <Box w='30%'>
                            <Avatar mt='2%' display={'block'} mx='auto' src={proileSvg}  size='sm' />
                            <Text ml='15%' mt='1%' color={'black'} noOfLines={1}>Players </Text>
                        </Box>
                        <Square  size='40%'>
                            <Text px='2' color={'black'} noOfLines={1} textAlign={'center'} >Your Current Challenges </Text>
                        </Square>
                        <Box w='30%'>
                            <Avatar mt='2%' display={'block'} mx='auto' src={proileSvg}  size='sm' />
                            <Text ml='15%' mt='1%' color={'black'} noOfLines={1}>Players </Text>
                        </Box>
                    </Flex>
                  </Box>     
              </VStack>
              <VStack border='2px'  borderRadius='lg' borderColor='#B5B5B5' color='black'  width={'80%'} mt='2rem' mx='10%' >
                  <Box w='100%' fontFamily={['Poppins,sans-serif']} px='0' mx='0' >
                    <Box borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
                      <Text textAlign={'center'}  py='2' fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} fontWeight={'bold'} > Room Code  </Text>
                    </Box>
                    <Box>
                        <Text py='4%' textAlign={'center'} >000000</Text>
                        <Button w='86%' mx='7%' colorScheme='blue'>Copy Code</Button>
                        <Button w='86%' mx='7%'my='4%' colorScheme='blue'>Games Rules Updated</Button>
                    </Box>
                  </Box>     
              </VStack>
              <VStack border='2px'  borderRadius='lg' borderColor='#B5B5B5' color='black'  width={'80%'} mt='2rem' mx='10%' >
                  <Box w='100%' fontFamily={['Poppins,sans-serif']} px='0' mx='0' >
                    <Box borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
                      <Text textAlign={'center'}  py='2' fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} fontWeight={'bold'} > Game Result  </Text>
                    </Box>
                    <Box>
                        <Text py='4%' textAlign={'center'} >000000</Text>
                        <Button w='86%' mx='7%' colorScheme='green'>I Won</Button>
                        <Button w='86%' mx='7%'my='4%' colorScheme='red'>I Loss</Button>
                        <Button w='86%' mx='7%'my='4%' colorScheme='red'>Cancel</Button>
                    </Box>
                  </Box>     
              </VStack>
            </Box>
          )}
        </Stack>
      </div>
    </section>
  )
}

export default Playground