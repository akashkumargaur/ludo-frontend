import { Button, Stack, Text, VStack,FormLabel,Input,FormControl, NumberInputField, NumberInput, HStack, useMediaQuery, Grid, GridItem, Image, Heading, Box, Avatar, Tag, TagLeftIcon, TagLabel, Center, Flex, Square, Spacer, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import img from "../../Assests/logo-img.png"
import trophy from "../../Assests/trophy.svg"
import play from "../../Assests/play.svg"
import Commion from '../Layout/Commion'
import { RiInformationFill, RiTrophyFill, RiTrophyLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { acceptChallenge, createChallenge, getAllChallenge } from '../../redux/action/challenge'
import { set } from 'mongoose'
import proileSvg from "../../Assests/Ellipse.svg"



const Challenge = ({isAuthenticated=false,user}) => {
    
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [number,setNumber]=useState('');

  const [isLargerThan800] = useMediaQuery('(min-width: 900px)', {
        ssr: true,
        fallback: false, // return false on the server, and re-evaluate on the client side
      })

      const { challenge, message, error ,loading ,requestChallenge } = useSelector(state => state.challenge);

      const [isLoading, setIsLoading] = useState(false);

      const handleplay = (e) => {
          setIsLoading(true);
          e.preventDefault();
          dispatch(createChallenge(e.target.value))
      }

      useEffect(() => {
        let defaultPrice=15000
        dispatch(getAllChallenge(defaultPrice))
      }, [dispatch])
      

      
      

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
              <Flex >
                
                <Square p='4'>
                  
                  <Input onChange={e=>setNumber(e.target.value)} maxLength={10} minLength={10} borderColor='#CED4DA' type='number' />
                </Square>
                <Spacer />
                <Box p='4' >
              <Button value={30} onClick={handleplay} colorScheme='blue'>create</Button>
                </Box>
              </Flex>
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
               {requestChallenge?(
               <>
               {requestChallenge.requestChallenge.length>0?(
               requestChallenge.requestChallenge.map((item,index)=>(<User key={index} item={item} />))
               ):(
                <>
                <Box >
                  <Text pt='50%' textAlign={'center'} fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} color={'red'} fontWeight={'bold'} > Currently No Challenge Available , Create Your Own Challenge  </Text>
                </Box>
               </>
               
               )}
               </>):(<>
                <Box >
                  <Text pt='50%'  textAlign={'center'} fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} color={'red'} fontWeight={'bold'} > Currently No Challenge Available , Create Your Own Challenge .  </Text>
                </Box>
               </>)} 
            </Box>
          )}
        </Stack>
      </div>
    </section>
  )
}

const User=(item)=>{
  const dispatch=useDispatch();
  const {change} = useSelector(state => state.challenge);
  const navigate=useNavigate();
  const handleaccept=(e)=>{
    e.preventDefault();
    dispatch(acceptChallenge(item.item._id))
  }
  useEffect(() => {
    if(change){
      navigate('/playground')
    }
  }, [change])
  
  return(  
    <VStack border='2px'  borderRadius='lg' borderColor='black' color='black'  width={'90%'} mt='2rem' mx='5%' >
        <Box  w='100%' fontFamily={['Poppins,sans-serif']} px='0' mx='0' >
        <Flex bg='#B5B5B5'>
            <HStack w='50%' p='4'>
              <Text  pl='2%' color={'black'} fontFamily={'bold'} children='Challenge Set By' />
            </HStack>
            <Spacer />
            <Box p='4' >
              <Text color={'green'}  >{item.item.price}</Text>
            </Box>
          </Flex>
          <Flex>
            <Square p='4'>
              <Avatar  display={'block'} mx='auto' src={proileSvg}  size='md' />
              <Text pl='2%' color={'black'}> {item.item.creator.name} </Text>
            </Square>
            <Spacer />
            <Box p='4' >
          <Button value={30} onClick={handleaccept} colorScheme='blue'>Play</Button>
            </Box>
          </Flex>
        </Box>     
    </VStack>
    )
  }

export default Challenge