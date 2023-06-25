import { Button, Stack, Text, VStack,FormLabel,Input,FormControl, NumberInputField, NumberInput, HStack, useMediaQuery, Grid, GridItem, Image, Heading, Box, PopoverTrigger, Toast, useToast } from '@chakra-ui/react'
import {React, useEffect, useRef, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import img from "../../Assests/logo-img.png"
import Header from '../Layout/Header'
import { useDispatch, useSelector } from 'react-redux';
import { registerCheck } from '../../redux/action/user'
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const dispatch=useDispatch();
  const [username,setUsername]=useState(''); 
  const [number,setNumber]=useState('');
  const [refer_from,setRefer_code]=useState(''); 
  const navigate=useNavigate();
  const toast = useToast();

  const { message ,error } = useSelector(state => state.user);

  // ssr-friendly media query with fallback
  const [isLargerThan800] = useMediaQuery('(min-width: 900px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })
  const submitHandler=(e)=>{
    e.preventDefault();
    if(number.length!==10){
      toast({
        title: 'Error',
        description: "number must be 10 digits long" ,
        status: 'error',
        isClosable: true,
      });
    }
    else if(username.length<=2){
      toast({
        title: 'Error',
        description: "username must be atleast  3  characters  long" ,
        status: 'error',
        isClosable: true,
      });
    }
    else{
      dispatch(registerCheck(number,username,refer_from))
    }
  }

  useEffect(() => {
    if(message){
      navigate('/otp')
    }
    if (error) {
      toast({
        title: 'Error',
        description: error,
        status: 'error',
        isClosable: true,
      });
      dispatch({ type: 'clearError' });
    }
  }, [message,error])
  

  return (
    <section className='home'>
      <div className='container' mt='0' >
        <Stack
            height='full' width="100%" m={0} p={0} 
            overflow='auto'
        >
          {isLargerThan800 ? (<Grid templateColumns='repeat(2, 1fr)' gap={6} >
            <GridItem  h='fit-content'  borderRight='2px' borderColor='#D2D2D2'   >
              <VStack border='2px'  borderRadius='lg' borderColor='#D2D2D2' color='black' width={['sm','lg']} mt='5rem' mb='1rem' mx='3rem' >
              <form onSubmit={submitHandler} fontFamily={['Poppins,sans-serif']} >
              <FormControl borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
                <Text pl='40%' py='2' fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} fontWeight={'bold'}  children="Register" />
              </FormControl>
                <FormControl p={['2','5']} >
                  <FormLabel  >Full Name</FormLabel>
                  <Input onChange={e=>setUsername(e.target.value)} borderColor='#CED4DA' type='name' />
                </FormControl>
                <FormControl   p={['2','5']}>
                  <FormLabel>Phone Number (Upi Number)</FormLabel>
                  <NumberInput onChange={e=>setNumber(e.target.value)}  max={9999999999} min={99999999999}>
                    <NumberInputField borderColor='#CED4DA' />
                  </NumberInput>
                </FormControl>
                <FormControl  p={['2','5']}>
                  <FormLabel >Refer Code (Optional)</FormLabel>
                  <Input onChange={e=>setRefer_code(e.target.value)} borderColor='#CED4DA' type='text' />
                </FormControl>
                <Text p={['2','5']} fontSize={['sm','md']} fontFamily={['Poppins,sans-serif']} textColor='#212529' >
                  By Continuing, you agree to our <Link Textcolor='#212529' to='/terms-of-service'>
                    <Text as='span' color='blue.500' children='Terms of Service' />
                    </Link>,
                  and you are 18 years or older.
                </Text>
                <HStack spacing={"5"} flex={1} pr='2'   justifyContent={"center"}>
                  <Button type='submit'  width='80%' textColor={'white'} colorScheme='white' backgroundColor={'blue.500'}  variant='unstyled'>
                    Submit
                  </Button>
                </HStack>
                <Text p={['2','5']} textAlign={'center'} fontSize={['sm','md']} fontFamily={['Poppins,sans-serif']} textColor='#212529' >
                Already have an account?<Link Textcolor='#212529' to='/login'>
                    <Text as='span' color='blue.500' children='Login' />
                    </Link>
                </Text>
              </form>

              </VStack>
            </GridItem>
            <GridItem  mt='5rem' h='10' flex={1}  >
              <Image boxSize={'250px'} justifyContent={'center'}    src={img} alt='logo' />
              <Heading p={['2','5']}  fontFamily={['Poppins,sans-serif']} textColor='#F14F4D' children='PLAY STAR KING LUDO & WIN REAL CASH!' />
              <Heading p={['2','5']}  fontFamily={['Poppins,sans-serif']} textColor='black' fontWeight={'light'} >
                For best experience, open starkingludo.com on  chrome mobile  
              </Heading>
            </GridItem>
          </Grid>) : (
              <VStack border='2px'  borderRadius='lg' borderColor='#D2D2D2' color='black' width={'80%'} mt={'1rem'} mx='2rem' >
                <form onSubmit={submitHandler} fontFamily={['Poppins,sans-serif']}>
                <FormControl borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
                  <Text pl='40%' py='2' fontFamily={['Poppins,sans-serif']} fontWeight={'bold'} fontSize={['lg','2xl']}  children="Register" />
                </FormControl>
                  <FormControl p={['2','5']} >
                    <FormLabel  >Full Name</FormLabel>
                    <Input onChange={e=>setUsername(e.target.value)} borderColor='#CED4DA' type='name' />
                  </FormControl>
                  <FormControl   p={['2','5']}>
                    <FormLabel>Phone Number</FormLabel>
                    <Input onChange={e=>setNumber(e.target.value)} maxLength={10} minLength={10} borderColor='#CED4DA' type='number' />
                  </FormControl>
                  <FormControl  p={['2','5']}>
                    <FormLabel >Refer Code (Optional)</FormLabel>
                    <Input onChange={e=>setRefer_code(e.target.value)} borderColor='#CED4DA' type='text' />
                  </FormControl>
                  <Text p={['2','5']} fontSize={['sm','md']} fontFamily={['Poppins,sans-serif']} textColor='#212529' >
                    By Continuing, you agree to our <Link Textcolor='#212529' to='/terms-of-service'>
                      <Text as='span' color='blue.500' children='Terms of Service' />
                      </Link>,
                    and you are 18 years or older.
                  </Text>
                  <HStack spacing={"5"} flex={1} pr='2'   justifyContent={"center"}>
                    <Button type='submit' width='80%' textColor={'white'} colorScheme='white' backgroundColor={'blue.500'}  variant='unstyled'>
                      Submit
                    </Button>
                  </HStack>
                  <Text textAlign={'center'} p={['2','5']} fontSize={['sm','md']} fontFamily={['Poppins,sans-serif']} textColor='#212529' >
                  Already have an account?<Link Textcolor='#212529' to='/login'>
                      <Text as='span' color='blue.500' children='Login' />
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


export default Register