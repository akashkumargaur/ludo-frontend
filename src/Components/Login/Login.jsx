import { Button, Stack, Text, VStack,FormLabel,Input,FormControl, NumberInputField, NumberInput, HStack, useMediaQuery, Grid, GridItem, Image, Heading, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import img from "../../Assests/logo-img.png"
import Header from '../Layout/Header'
import { useDispatch, useSelector } from 'react-redux'
import { loginCheck } from '../../redux/action/user'

const Login = () => {

  const [phone_number,setNumber]=useState('');
  const dispatch= useDispatch();
  const toast = useToast();
  const navigate=useNavigate();

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })

  const { message ,error } = useSelector(state => state.user);

  const submitHandler=(e)=>{
    e.preventDefault();
    if(phone_number.length!==10){
      toast({
        title: 'Error',
        description: "number must be 10 digits long" ,
        status: 'error',
        isClosable: true,
      });
      return ;
    }
    dispatch(loginCheck(phone_number))
}

useEffect(() => {
  if(message){
    navigate('/login-otp')
  }
}, [message])

  return (
    <section className='home'>
      <div className='container'>
        <Stack
            height="100%"
            width="100%"
            m={0} p={0} overflow={'auto'}
        >
          {isLargerThan800 ? (<Grid templateColumns='repeat(2, 1fr)' gap={6} >
            <GridItem h='100vh'  borderRight='2px' borderColor='#D2D2D2'  >
              <VStack border='2px'  borderRadius='lg' borderColor='#D2D2D2' color='black' width={['sm','lg']} mt='4rem' ml='4rem' >
              <form onSubmit={submitHandler} fontFamily={['Poppins,sans-serif']}>
            <FormControl borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
              <Text pl='40%' py='2' fontWeight={'bold'} children="Login" />
            </FormControl>
              <FormControl   p={['2','5']}>
                <FormLabel>Phone Number</FormLabel>
                <Input onChange={e=>setNumber(e.target.value)} maxLength={10} minLength={10} borderColor='#CED4DA' type='number' />
              </FormControl>
              <Text p={['2','5']} fontSize={['sm','md']} fontFamily={['Poppins,sans-serif']} textColor='#212529' >
                By Continuing, you agree to our <Link Textcolor='#212529' to='/terms-of-service'>
                  <Text as='span' color='blue.500' children='Terms of Service' />
                  </Link>,
                and you are 18 years or older
              </Text>
              <Button type='submit' ml='40%' h={['30px','40px']} colorScheme='teal' size='xs'>
                Submit
              </Button>
              <Text p={['2','5']} fontSize={['sm','md']} fontFamily={['Poppins,sans-serif']} textColor='#212529' >
              Don't have an account?<Link Textcolor='#212529' to='/register'>
                  <Text as='span' color='blue.500' children='register' />
                  </Link>
              </Text>
            </form>
              </VStack>
            </GridItem>
            <GridItem w='100%' mt='10rem' h='10' flex={1}  >
              <Image boxSize={'250px'} justifyContent={'center'}    src={img} alt='logo' />
              <Heading p={['2','5']}  fontFamily={['Poppins,sans-serif']} textColor='#F14F4D' children='PLAY STAR KING LUDO & WIN REAL CASH!' />
              <Heading p={['2','5']}  fontFamily={['Poppins,sans-serif']} textColor='black' fontWeight={'light'} >
                For best experience, open starkingludo.com on  chrome mobile  
              </Heading>
            </GridItem>
          </Grid>) : (
            <VStack border='2px'  borderRadius='lg' borderColor='#D2D2D2' color='black' width={'80%'} mt='1rem' mx='10%'  >
            <form onSubmit={submitHandler} fontFamily={['Poppins,sans-serif']}>
            <FormControl borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
              <Text pl='40%' py='2' fontWeight={'bold'} children="Login" />
            </FormControl>
              <FormControl   p={['2','5']}>
                <FormLabel>Phone Number</FormLabel>
                <Input onChange={e=>setNumber(e.target.value)} maxLength={10} minLength={10} borderColor='#CED4DA' type='number' />
              </FormControl>
              <Text p={['2','5']} fontSize={['sm','md']} float={'center'} fontFamily={['Poppins,sans-serif']} textColor='#212529' >
                By Continuing, you agree to our <Link Textcolor='#212529' to='/terms-of-service'>
                  <Text as='span' color='blue.500' children='Terms of Service' />
                  </Link>,
                and you are 18 years or older .
              </Text>
              <Button type='submit' ml='10%' w='80%' h={['30px','40px']} bg='blue.500' color={'white'} size='xl'>
                Login
              </Button>
              <Text p={['2','5']} fontSize={['sm','md']} fontFamily={['Poppins,sans-serif']} textColor='#212529' >
              Don't have an account?<Link Textcolor='#212529' to='/register'>
                  <Text as='span' color='blue.500' children='Register' />
                  </Link>
              </Text>
            </form>
          </VStack>
          )}
            
        </Stack>
      </div>
    </section>
  )
}

export default Login