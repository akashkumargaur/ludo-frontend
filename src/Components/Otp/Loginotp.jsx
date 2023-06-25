import { Button, Stack, Text, VStack,FormLabel,Input,FormControl, NumberInputField, NumberInput, HStack, useMediaQuery, Grid, GridItem, Image, Heading, PinInput, PinInputField, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import img from "../../Assests/logo-img.png"
import { RiArrowGoBackFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { getMyProfile, login } from '../../redux/action/user'

const Loginotp  = () => {

  const [otp,setotp]=useState(''); 
  const dispatch=useDispatch();
  const toast = useToast();
  const navigate=useNavigate();

  const handlePinChange = (value) => {
    setotp(value);
  };

  const {stat,message,error} = useSelector(state => state.user);

  const [isLargerThan800] = useMediaQuery('(min-width: 900px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })

  const submitHandler=(e)=>{
    e.preventDefault();
    if(otp.length<6){
      toast({
        title: 'Error',
        description: "please fill complete otp" ,
        status: 'error',
        isClosable: true,
      });
    }
    else{
        dispatch(login(stat.phone_number,otp))
    }
  }

  useEffect(() => {
    if(message){
      dispatch(getMyProfile());
      navigate('/play')
    }
  }, [message])

  return (
    <section className='home'>
      <div className='container'>
        <Stack
            direction={["column"]}
            height='full'            width="100%"
            justifyContent={["center","space-between"]}
            alignItems="center" m={0} p={0} 
            overflow='auto'
        >
          {isLargerThan800 ? (<Grid templateColumns='repeat(2, 1fr)' gap={6} >
            <GridItem w='100%' h='10'  >
              <VStack border='2px'  borderRadius='lg' borderColor='#D2D2D2' color='black' width={['sm','lg']} mt='2rem' ml='1rem' >
              <form onSubmit={submitHandler} fontFamily={['Poppins,sans-serif']}>
              <FormControl borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
                <Text pl='40%' py='2' fontFamily={['Poppins,sans-serif']} fontSize={'md'} fontWeight={'bold'}  children="Verify Phone Number" />
              </FormControl>
                <Button leftIcon={<RiArrowGoBackFill/>} mt={'4'} ml='2' p='2' textColor={'white'} colorScheme='white' backgroundColor={'blue.500'}  variant='unstyled' >Change Number</Button>
                <HStack mt='4' flex={1} alignItems={'center'} justifyContent={'center'} >
                  <PinInput otp onChange={handlePinChange} >
                    <PinInputField border='2px'  borderRadius='lg' borderColor='#D2D2D2' />
                    <PinInputField border='2px'  borderRadius='lg' borderColor='#D2D2D2' />
                    <PinInputField border='2px'  borderRadius='lg' borderColor='#D2D2D2' />
                    <PinInputField border='2px'  borderRadius='lg' borderColor='#D2D2D2'/>
                    <PinInputField border='2px'  borderRadius='lg' borderColor='#D2D2D2'/>
                    <PinInputField border='2px'  borderRadius='lg' borderColor='#D2D2D2'/>
                  </PinInput>
                </HStack>
                <Text p={['2','5']} fontSize={['sm','md']} fontFamily={['Poppins,sans-serif']} textColor='#212529' >
                  By Continuing, you agree to our <Link Textcolor='#212529' to='/terms-of-service'>
                    <Text as='span' color='blue.500' children='Terms of Service' />
                    </Link>,
                  and you are 18 years or older.
                </Text>
                <HStack spacing={"5"} flex={1} pr='2' mb='2'   justifyContent={"center"}>
                  <Button type='submit' width='80%' textColor={'white'} colorScheme='white' backgroundColor={'blue.500'}  variant='unstyled'>
                    Verify
                  </Button>
                </HStack>
              </form>
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
            <VStack border='2px'  borderRadius='lg' borderColor='#D2D2D2' color='black' width={'80%'} mt={'-80'} mr='2%' >
            <form onSubmit={submitHandler} fontFamily={['Poppins,sans-serif']}>
              <FormControl borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA'  >
                <Text pl='20%' py='2' fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} fontWeight={'bold'}  children="Verify Phone Number" />
              </FormControl>
                <Button leftIcon={<RiArrowGoBackFill/>} mt={'4'} ml='2' p='2' textColor={'white'} colorScheme='white' backgroundColor={'blue.500'}  variant='unstyled' >Change Number</Button>
                <HStack mt='4' flex={1} alignItems={'center'} justifyContent={'center'} >
                  <PinInput otp onChange={handlePinChange}>
                    <PinInputField border='2px'  borderRadius='lg' borderColor='#D2D2D2' />
                    <PinInputField border='2px'  borderRadius='lg' borderColor='#D2D2D2' />
                    <PinInputField border='2px'  borderRadius='lg' borderColor='#D2D2D2' />
                    <PinInputField border='2px'  borderRadius='lg' borderColor='#D2D2D2'/>
                    <PinInputField border='2px'  borderRadius='lg' borderColor='#D2D2D2'/>
                    <PinInputField border='2px'  borderRadius='lg' borderColor='#D2D2D2'/>
                  </PinInput>
                </HStack>
                <Text p={['2','5']} fontSize={['sm','md']} fontFamily={['Poppins,sans-serif']} textColor='#212529' >
                  By Continuing, you agree to our <Link Textcolor='#212529' to='/terms-of-service'>
                    <Text as='span' color='blue.500' children='Terms of Service' />
                    </Link>,
                  and you are 18 years or older.
                </Text>
                <HStack spacing={"5"} flex={1} pr='2' mb='2'   justifyContent={"center"}>
                  <Button type='submit' width='80%' textColor={'white'} colorScheme='white' backgroundColor={'blue.500'}  variant='unstyled'>
                    Verify
                  </Button>
                </HStack>
              </form>

          </VStack>
          )}
        </Stack>
      </div>
    </section>
  )
}

export default Loginotp