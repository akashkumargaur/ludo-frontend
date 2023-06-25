import { Button, Stack, Text, VStack,FormLabel,Input,FormControl, HStack, useMediaQuery, Grid, GridItem, Image, Heading, Box, Avatar, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import img from "../../Assests/logo-img.png"
import Header from '../Layout/Header'
import proileSvg from "../../Assests/Ellipse.svg"
import { useDispatch } from 'react-redux'
import { getMyProfile, logout } from '../../redux/action/user'


const Profile = ({isAuthenticated,user}) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

    const [isLargerThan800] = useMediaQuery('(min-width: 900px)', {
        ssr: true,
        fallback: false, // return false on the server, and re-evaluate on the client side
      })

      const  logouthandler=(e)=>{
        e.preventDefault();
        dispatch(logout());
        navigate("/");
      }
    //   useEffect(() => {
    //     dispatch(getMyProfile());
    // }, [dispatch]);

  return (
    <section className='home'>
      <div className='container'>
        <Stack
            height='full' width="100%" m={0} p={0}  overflow='auto'
        >
          {isLargerThan800 ? (<Grid templateColumns='repeat(2, 1fr)' gap={6} >
          <GridItem  h='fit-content'  borderRight='2px' borderColor='#D2D2D2'   >
              <VStack border='2px'  borderRadius='lg' borderColor='#D2D2D2' color='#B5B5B5' width={'fit-content'} mt='2rem' ml='7rem' >
                <form fontFamily={['Poppins,sans-serif']}>
                <FormControl borderBottom='2px' borderColor='#D2D2D2' bg='#B5B5B5' >
                  <Text pl='40%' py='2' fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} fontWeight={'bold'}  children="Profile" />
                </FormControl>
                  <Box w='100%' mt='5%' flex='1' alignItems={'center'}  justifyContent={'center'}  >
                    <Avatar ml='30%' size='xl' />
                  </Box>
                  <FormControl p={['2','5']} >
                    <FormLabel  >Username</FormLabel>
                    <Input placeholder={user.username} borderColor='#CED4DA' type='email' />
                  </FormControl>
                  <FormControl   p={['2','5']}>
                    <FormLabel>Mobile Number</FormLabel>
                    <Input placeholder={user.phone_number} isDisabled borderColor='#CED4DA' type='number' />
                  </FormControl>
                </form>
              </VStack>
              <VStack border='2px'  borderRadius='lg' borderColor='#D2D2D2' color='#B5B5B5' h={'fit-content'} width={'fit-content'} mt='2rem' ml='7rem' >
              <form fontFamily={['Poppins,sans-serif']}>
                <FormControl borderBottom='2px' borderColor='#D2D2D2' bg='#B5B5B5' >
                  <Text pl='40%' py='2' fontFamily={['Poppins,sans-serif']} fontSize='lg' fontWeight={'bold'}  children="Metrics" />
                </FormControl>
                <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' m='2' h='fit-content' >
                  <Box border='2px' borderColor='#D2D2D2' mb='4%' >
                    <Box borderBottom='2px' borderColor='#D2D2D2' bg='#B5B5B5' >
                      <Text pl='4%' py='2' fontFamily={['Poppins,sans-serif']} fontSize='md' fontWeight={'bold'}  children="Game Played" />
                    </Box>
                    <Text color={'#B5B5B5'} children={user.game_played} />
                  </Box>
                  <Box border='2px' borderColor='#D2D2D2' >
                    <Box borderBottom='2px' borderColor='#D2D2D2' bg='#B5B5B5' >
                      <Text pl='4%'  py='2' fontFamily={['Poppins,sans-serif']} fontSize='md' fontWeight={'bold'}  children="Referral earning" />
                    </Box>
                    <Text color={'#B5B5B5'} children={user.referal_earning} />
                  </Box>
                </GridItem>
                <GridItem w='100%' mt='2' mr='2' mb='2' pr='2' h='fit-content' >
                  <Box border='2px' borderColor='#D2D2D2' mb='4%' >
                    <Box borderBottom='2px' borderColor='#D2D2D2' bg='#B5B5B5' >
                      <Text pl='4%' py='2' fontFamily={['Poppins,sans-serif']} fontSize='md' fontWeight={'bold'}  children="Chips" />
                    </Box>
                    <Text color={'#B5B5B5'} children={user.cash_balance} />
                  </Box>
                  <Box border='2px' borderColor='#D2D2D2' >
                    <Box borderBottom='2px' borderColor='#D2D2D2' bg='#B5B5B5' >
                      <Text pl='4%' py='2' fontFamily={['Poppins,sans-serif']} fontSize='md' fontWeight={'bold'}  children="Penalty" />
                    </Box>
                    <Text color={'#B5B5B5'} children={user.penalty} />
                  </Box>
                </GridItem>
              </Grid>
                </form>
              </VStack>
              <Button  mt='2rem' ml='7rem'  bg='#F14F4D' textColor='white'  fontFamily={['Poppins,sans-serif']} fontWeight={'bold'} children='Logout' />
            </GridItem>
            <GridItem w='100%' mt='5rem' h='10' flex={1}  >
              <Image boxSize={'250px'} justifyContent={'center'}    src={img} alt='logo' />
              <Heading p={['2','5']}  fontFamily={['Poppins,sans-serif']} textColor='#F14F4D' children='PLAY STAR KING LUDO & WIN REAL CASH!' />
              <Heading p={['2','5']}  fontFamily={['Poppins,sans-serif']} textColor='#B5B5B5' fontWeight={'light'} >
                For best experience, open starkingludo.com on  chrome mobile  
              </Heading>
            </GridItem>
          </Grid>) : (
            <>
            {user?(
            <>
            <Box>
            <VStack border='2px'  borderRadius='lg' borderColor='#B5B5B5' color='#B5B5B5' width={'92%'} mt='1rem' mx='4%' >
                <Box p='0' mx='0' w='100%' >
                  <Box fontFamily={['Poppins,sans-serif']} >
                    <Box borderBottom='2px' borderColor='#B5B5B5' bg='#B5B5B5' >
                      <Text color={'black'} pl='40%' py='2' fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} fontWeight={'bold'}  children="Profile" />
                    </Box>
                    <Box w='100%'   >
                      <Avatar mt='5%' display={'block'} mx='auto' src={proileSvg}  size='md' />
                    </Box>
                    <Box pl='2' pt='2'pb='2' >
                      <FormLabel color={'black'}  >Username</FormLabel>
                      <Input color={'black'} w={'75%'}  isDisabled={1} defaultValue={user.username}  borderColor='#CED4DA' type='email' />
                      <Button mx='5%'  width={'15%'}  bg='blue.600' textColor='white' fontWeight={'bold'} children='Edit' />
                    </Box>
                    <Box   p='2'>
                      <FormLabel color={'black'}>Mobile Number</FormLabel>
                      <Box>
                      <Input w={'95%'} color={'#B5B5B5'}  isDisabled={1} defaultValue={user.phone_number}  borderColor='#CED4DA' type='email' />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </VStack>
              <VStack border='2px'  borderRadius='lg' borderColor='#B5B5B5' color='#B5B5B5'  width={'92%'} mt='2rem' mx='4%' >
              <Box  w='100%'>
                  <Box fontFamily={['Poppins,sans-serif']} px='0' mx='0' >
                    <Box borderBottom='2px' borderColor='#B5B5B5' bg='#B5B5B5' >
                      <Text color={'black'} textAlign={'center'} py='2' fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} fontWeight={'bold'}  children="Metrics" />
                    </Box>
                    <Grid templateColumns='repeat(2, 1fr)' gap={0}>
                <GridItem w='90%' m='2' h='fit-content' >
                  <Box border='2px' mb='2' borderColor='#B5B5B5' borderRadius='lg'  >
                    <Box borderBottom='2px' borderColor='#B5B5B5' bg='#B5B5B5' >
                      <Text color={'black'} textAlign={'center'} py='2' fontFamily={['Poppins,sans-serif']} fontSize='md' fontWeight={'bold'}  children="Game Played" />
                    </Box>
                    <Text color={'black'}  textAlign={'center'} >{String(user.game_played)}</Text>
                  </Box>
                  <Box border='2px' borderColor='#B5B5B5' borderRadius='lg'  >
                    <Box borderBottom='2px' borderColor='#B5B5B5' bg='#B5B5B5' >
                      <Text color={'black'} noOfLines={1} textAlign={'center'} py='2'  fontFamily={['Poppins,sans-serif']} fontSize='bold' fontWeight={'bold'}  children="Referral Earning" />
                    </Box>
                    <Text color={'black'} textAlign={'center'}  >{String(user.referal_earning)}</Text>
                  </Box>
                </GridItem>
                <GridItem w='90%' m='2'  h='fit-content' >
                  <Box border='2px' borderColor='#B5B5B5' mb='2' borderRadius='lg' >
                    <Box borderBottom='2px' borderColor='#B5B5B5' bg='#B5B5B5' >
                      <Text color={'black'} textAlign={'center'} py='2' fontFamily={['Poppins,sans-serif']} fontSize='md' fontWeight={'bold'}  children="Chips" />
                    </Box>
                    <Text textAlign={'center'} color={'black'} >{String(user.cash_balance)} </Text>
                  </Box>
                  <Box border='2px' borderColor='#B5B5B5' borderRadius='lg' >
                    <Box borderBottom='2px' borderColor='#B5B5B5' bg='#B5B5B5' >
                      <Text color={'black'} textAlign={'center'} py='2' fontFamily={['Poppins,sans-serif']} fontSize='md' fontWeight={'bold'}  children="Penalty" />
                    </Box>
                    <Text color={'black'} textAlign={'center'}  > {String(user.penalty)}</Text>
                  </Box>
                </GridItem>
              </Grid>
                    </Box>
              </Box>      
              </VStack>
              <Button onClick={logouthandler}  mt='2rem' w='80%' mx='10%'  bg='#F14F4D' textColor='white'  fontFamily={['Poppins,sans-serif']} fontWeight={'bold'} children='Logout' />
            </Box>
            </>):(
            <>
            <Spinner/>
            </>)}
            </>
          )}
        </Stack>
      </div>
    </section>
  )
}

export default Profile