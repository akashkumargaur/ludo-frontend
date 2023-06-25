import { Button, HStack, Image, Stack, VStack } from '@chakra-ui/react'
import Supportimg from '../Assests/support.png'
import React from 'react'
import { RiInstagramFill, RiMailUnreadFill } from 'react-icons/ri'
import './support.css'
import Header from './Layout/Header'

const Support = () => {
  return (
    <section className='home'>
      <div className='container'>
        <Stack
            height='full' width="100%" m={0} p={0} 
            overflow='auto'
        >
          <VStack border='2px' borderRadius='lg' borderColor='#D2D2D2' color='black' width={'80%'} mt='5rem' mb='1rem' mx={'10%'} p='2' >
            <Image src={Supportimg} alt="logo" w={"200px"} h={"200px"}/>
            <HStack spacing={"5"} flex={1} pr='2'   justifyContent={"center"}>
                <Button leftIcon={<RiInstagramFill/>} width='40vh' textColor={'white'}  className='insta'    variant='unstyled'>
                    Connect With Us On Instagram
                </Button>
            </HStack>
            <HStack spacing={"5"} flex={1} pr='2' pb='4' width='-moz-fit-content'   justifyContent={"center"}>
                <Button leftIcon={<RiMailUnreadFill/>} width='40vh' textColor={'white'}  colorScheme='white' backgroundColor={'blue.500'}   variant='unstyled'>
                    Reach Us View Email
                </Button>
            </HStack>
          </VStack>
            
        </Stack>
      </div>
    </section>
  )
}

export default Support