import { Button, Stack, Text, VStack,FormLabel,Input,FormControl, NumberInputField, NumberInput, HStack, useMediaQuery, Grid, GridItem, Image, Heading, Box, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../Assests/logo-img.png"
import Header from '../Layout/Header'
import { RiArrowLeftLine, RiInformationFill } from 'react-icons/ri'

const Payment = () => {
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
                <Button   mt='2rem' ml='4rem' width={'10%'}  bg='blue.600' textColor='white'  fontFamily={['Poppins,sans-serif']} fontWeight={'bold'} children='Submit' />
                <Button mt='2rem' mr='4rem' float={'right'} leftIcon={<RiInformationFill />} bg='blue.600'  variant='solid'>
                    Guide
                </Button>
            </Box>
              <VStack border='2px'  borderRadius='lg' borderColor='#D2D2D2' color='black' h={'fit-content'} width={'60%'} mt='2rem' ml='5rem' >
                <Box w='100%'>
                    <form fontFamily={['Poppins,sans-serif']}  >
                    <FormControl w='full'  borderBottom='2px' borderColor='#D2D2D2' >
                    <Text pl='40%' py='2' pr='2' fontFamily={['Poppins,sans-serif']} fontSize={'md'} fontWeight={'bold'}  children="Payment mode" />
                    </FormControl>
                    <FormControl borderBottom='2px' borderColor='#D2D2D2' bg='gray.600' >
                    <Text pl='40%' py='2' pr='2' fontFamily={['Poppins,sans-serif']} fontSize={'md'} color={'white'} fontWeight={'medium'}  children="Withdraw Chips:24.00" />
                    </FormControl>
                    <Box w='100%' mt='5%'   >
                        <Box  >
                            <Text pl='1%' float={'left'}  >Minimum:95</Text>
                            <Text pr='3%' float={'right'} >Maximum :10,000</Text>
                        </Box>
                    </Box>
                    </form>
                </Box>
              </VStack>
              <VStack mb='5' border='2px'  borderRadius='lg' borderColor='#D2D2D2' color='black' h={'fit-content'} width={'60%'} mt='2rem' ml='5rem' >
              <Box w='100%' mb='5'  >
                <form fontFamily={['Poppins,sans-serif']}>
                    <FormControl borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
                    <Text pl='40%' py='2' fontFamily={['Poppins,sans-serif']} fontSize={'md'} fontWeight={'bold'}  children="Payment Details" />
                    </FormControl>
                    <FormControl p={['2','5']} >
                    <FormLabel  >UPI ID</FormLabel>
                    <Input borderColor='#CED4DA' type='number' />
                    </FormControl>
                    <FormControl p={['2','5']} >
                    <FormLabel  >Conform UPI ID </FormLabel>
                    <Input borderColor='#CED4DA' type='number' />
                    </FormControl>
                    <FormControl p={['2','5']} >
                    <FormLabel  >Chips</FormLabel>
                    <Input borderColor='#CED4DA' placeholder='Chips'  type='text' />
                    </FormControl>
                    <Text p={['2','5']} fontSize={['sm','md']} fontFamily={['Poppins,sans-serif']} textColor='#212529' >
                    By Continuing, you agree to our <Link Textcolor='#212529' to='/terms-of-service'>
                      <Text as='span' color='blue.500' children='Terms of Service' />
                      </Link>,
                    and you are 18 years or older.
                  </Text>
                    <Button   mt='2rem' ml='4rem' width={'70%'}  bg='blue.600' textColor='white'  fontFamily={['Poppins,sans-serif']} fontWeight={'bold'} children='Submit' />
                    </form>
              </Box>
              </VStack>
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
                <Box>
                <Button leftIcon={<RiArrowLeftLine/>}   mt='2rem' ml='2%'   bg='blue.600' textColor='white'  fontFamily={['Poppins,sans-serif']} fontWeight={'bold'} children='Back' />
                <Button mt='2rem' mr='2%' float={'right'} leftIcon={<RiInformationFill />} bg='blue.600'  variant='solid'>
                    Guide
                </Button>
            </Box>
            <VStack border='2px'  borderRadius='lg' borderColor='#D2D2D2' color='black' h={'fit-content'} width={'80%'} mt='2rem' ml='10%' >
                <Box w='100%'>
                    <form fontFamily={['Poppins,sans-serif']}  >
                    <FormControl w='full'  borderBottom='2px' borderColor='#D2D2D2' >
                    <Text pl='30%' py='2' pr='2' fontFamily={['Poppins,sans-serif']} fontSize={'md'} fontWeight={'bold'}  children="Payment mode" />
                    </FormControl>
                    <FormControl borderBottom='2px' borderColor='#D2D2D2' bg='gray.600' >
                    <Text pl='20%' py='2' pr='2' noOfLines={'1'} fontFamily={['Poppins,sans-serif']} fontSize={'md'} color={'white'} fontWeight={'medium'}  children="Withdraw Chips:24.00" />
                    </FormControl>
                    <Box w='100%' mt='5%'   >
                        <Box  >
                            <Text pl='1%' float={'left'}  >Minimum:95</Text>
                            <Text pr='3%' float={'right'} >Maximum :10,000</Text>
                        </Box>
                    </Box>
                    </form>
                </Box>
              </VStack>
              <VStack mb='5' border='2px'  borderRadius='lg' borderColor='#D2D2D2' color='black' h={'fit-content'} width={'80%'} mt='2rem' ml='10%' >
              <Box w='100%' mb='5'  >
                <form fontFamily={['Poppins,sans-serif']}>
                    <FormControl borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
                    <Text pl='30%' py='2' fontFamily={['Poppins,sans-serif']} fontSize={'md'} fontWeight={'bold'}  children="Payment Details" />
                    </FormControl>
                    <FormControl p={['2','5']} >
                    <FormLabel  >UPI ID</FormLabel>
                    <Input borderColor='#CED4DA' type='number' />
                    </FormControl>
                    <FormControl p={['2','5']} >
                    <FormLabel  >Conform UPI ID </FormLabel>
                    <Input borderColor='#CED4DA' type='number' />
                    </FormControl>
                    <FormControl p={['2','5']} >
                    <FormLabel  >Chips</FormLabel>
                    <Input borderColor='#CED4DA' placeholder='Chips'  type='text' />
                    </FormControl>
                    <Text p={['2','5']} fontSize={['sm','md']} fontFamily={['Poppins,sans-serif']} textColor='#212529' >
                    By Continuing, you agree to our <Link Textcolor='#212529' to='/terms-of-service'>
                      <Text as='span' color='blue.500' children='Terms of Service' />
                      </Link>,
                    and you are 18 years or older.
                  </Text>
                    <Button   mt='2rem' ml='10%' width={'80%'}  bg='blue.600' textColor='white'  fontFamily={['Poppins,sans-serif']} fontWeight={'bold'} children='Submit' />
                    </form>
              </Box>
              </VStack>
            </Box>
          )}
        </Stack>
      </div>
    </section>
  )
}

export default Payment