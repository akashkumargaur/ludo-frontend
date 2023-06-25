import { Button, Stack, Text, VStack,FormLabel,Input,FormControl, NumberInputField, NumberInput, HStack, useMediaQuery, Grid, GridItem, Image, Heading, Box, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import img from "../../Assests/logo-img.png"
import board from  '../../Assests/board1.jpg'
import coming from  '../../Assests/board1.jpg'
import Commion from '../Layout/Commion'
import board1 from "../../Assests/ludoboard2.svg"
import snake from "../../Assests/snake.png"
import { useDispatch, useSelector } from 'react-redux'
import { getAllChallenge } from '../../redux/action/challenge'

const Play = ({isAuthenticated,user}) => {

  const toast=useToast();
  const dispatch=useDispatch();
  const navigate=useNavigate();

  

  const [isLargerThan800] = useMediaQuery('(min-width: 900px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })

  const {  message, error ,loading } = useSelector(state => state.challenge);

  const handlecoming=(e)=>{
    e.preventDefault();
    toast({
      title: 'Message',
      description: "this category is soon coming" ,
      status: 'error',
      isClosable: true,
    });
  }

  const handlechallenge=(e)=>{
    e.preventDefault();
    if(isAuthenticated){
      let defaultPrice=15000
      dispatch(getAllChallenge(defaultPrice))
      navigate('/challenges')
    }
    else{
      toast({
        title: 'Error',
        description: "please login first" ,
        status: 'error',
        isClosable: true,
      });
    }
  }

  return (
    <section className='home'>
      <div className='container' mt='0' >
        <Stack
            height='full' width="100%" m={0} p={0} 
            overflow='auto'
        >
          {isLargerThan800 ? (
          <Grid h='70%' templateColumns='repeat(2, 1fr)' gap={10}>
          <GridItem  m='2%' >
            <Box border='2px' h='50%' borderColor='#D2D2D2' >
              <Box onClick={handlechallenge} >
                <Image   alt='board' src={board}  />
              </Box>
              <Text fontWeight={'bold'} textAlign={'center'} color={'black'} children='Ludo Classic' />
            </Box>
            <Box border='2px' h='50%' borderColor='#D2D2D2' mt='4%' >
              <Box onClick={handlecoming}>
                <Image   h='50%' alt='board' src={snake}  />
              </Box>
              <Text fontWeight={'bold'} textAlign={'center'} color={'black'} children='Ludo Popular' />
            </Box>
          </GridItem>
          <GridItem  m='2%' >
          <Box border='2px' h='50%' borderColor='#D2D2D2' mb='4%' >
              <Box onClick={handlecoming} >
                <Image   h='50%' alt='board' src={coming}  />
              </Box>
              <Text fontWeight={'bold'} textAlign={'center'} color={'black'} children='Ludo Popular' />
            </Box>
            <Box border='2px' h='50%' mt='1rem' borderColor='#D2D2D2' mb='4%' >
              <Box onClick={handlecoming} >
                <Image  h='70%' alt='board' src={board1}  />
              </Box>
              <Text fontWeight={'bold'} textAlign={'center'} color={'black'} children='Ludo Popular' />
            </Box>
          </GridItem>
        </Grid>
          ) : (
            <Box>
                <Commion/>
                <VStack  color='black'  width='90%' mt='4%' mb='1rem' mx='1rem' >
              <form fontFamily={['Poppins,sans-serif']} >
              <Box >
                <Heading textAlign={'center'} pl='2%' py='2' fontFamily={['Poppins,sans-serif']} fontSize={'2xl'} fontWeight={'bold'}  children="Our Games" />           
              </Box>
              <Grid h='70%' templateColumns='repeat(2, 1fr)' gap={10}>
                <GridItem  m='2%' >
                  <Box border='2px' h='50%' borderColor='#D2D2D2' >
                    <Box onClick={handlechallenge} >
                      <Image  alt='board' src={board}  />
                    </Box>
                    <Text fontWeight={'bold'} textAlign={'center'} color={'black'} children='Ludo Classic' />
                  </Box>
                  <Box border='2px' h='50%' borderColor='#D2D2D2' mt='4%' >
                    <Box onClick={handlecoming} >
                      <Image  h='50%' alt='board' src={snake}  />
                    </Box>
                    <Text fontWeight={'bold'} textAlign={'center'} color={'black'} children='Ludo Popular' />
                  </Box>
                </GridItem>
                <GridItem  m='2%' >
                <Box border='2px' h='50%' borderColor='#D2D2D2' mb='4%' >
                    <Box onClick={handlecoming}>
                      <Image  h='50%' alt='board' src={coming}  />
                    </Box>
                    <Text fontWeight={'bold'} textAlign={'center'} color={'black'} children='Ludo Popular' />
                  </Box>
                  <Box border='2px' h='50%' mt='1rem' borderColor='#D2D2D2' mb='4%' >
                    <Box onClick={handlecoming}>
                      <Image  h='70%' alt='board' src={board1}  />
                    </Box>
                    <Text fontWeight={'bold'} textAlign={'center'} color={'black'} children='Ludo Popular' />
                  </Box>
                </GridItem>
              </Grid>
                
              </form>

              </VStack>
            </Box>
              
          )}
        </Stack>
      </div>
    </section>
  )
}

export default Play