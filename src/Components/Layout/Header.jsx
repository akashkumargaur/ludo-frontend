import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack ,Image,Text, Heading, Box } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import {RiDatabaseFill, RiInformationFill, RiLogoutBoxLine, RiMenu5Fill} from "react-icons/ri"
import { Link, useNavigate } from 'react-router-dom';
import dice from "../../Assests/dice.svg"
import img from "../../Assests/logo-img.png"
import brifcase from "../../Assests/brifcase.png"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/action/user';



const Header = ({isAuthenticated=false,user}) => {
  const {isOpen,onOpen,onClose}= useDisclosure();
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const  logouthandler=(e)=>{
    e.preventDefault();
    onClose();
    dispatch(logout());
    navigate("/");
  }

  // const { isAuthenticated, user, message, error ,loading } = useSelector(state => state.user);

  const LinkButton =({url="/",title="Home"})=>(
    <Link onClick={onClose} to={url} >
      <Button variant={"ghost"}>{title}</Button>
    </Link>
  );

  useEffect(() => {
    console.log("isAuthenticated",isAuthenticated)
    console.log("user",user)
  }, [isAuthenticated])
  

  return (
    <>
      <HStack  position={'relative'} height={["10vh","10vh"]} width={"100%"} top={"0"} backgroundColor={'white'} mt='0'   bottom={"2rem"} borderBottom='2px' borderColor='#D2D2D2' >
        <Button color='black' ml='4' bg='white' width={"12"} height={"12"}  onClick={onOpen}>
          <RiMenu5Fill/>
        </Button>
        <Image src={img} alt="logo"  w={["50px","100px"]} h={["45px","75px"]}/>
        <HStack spacing={"5"} flex={1} pr='1rem'  justifyContent={"flex-end"}>
          {user?(<HStack border='2px'  borderRadius='lg' borderColor='#D2D2D2' h='40%' p='2%'  w='fit-content'    bg='#D2D2D2'>
            <Image  src={brifcase} width={"8"} height={"6"}  />
            <Text fontWeight={'bold'}  color={'black'} children={user.cash_balance}   />
          </HStack>):(<Button leftIcon={<RiInformationFill />} colorScheme='blue'  variant='outline'>
            Guide
          </Button>)}
        </HStack>
      </HStack>

      <Drawer placement={"left"}  isOpen={isOpen} onClose={onClose} >
        <DrawerOverlay/>
        <DrawerContent  >
          <DrawerHeader bg='black' pl='30%' borderBottomWidth={"1px"} color={'white'} > StarKingLudo </DrawerHeader>
          <DrawerBody px='0' className='drawer' >
            <VStack spacing={"5"}  alignItems={"flex-start"}>
              <Box w='99%' bg={'white'} >
                  <Link onClick={onClose} to={'/play'} >
                    <Button w='100%' bg={'white'} >
                    <Image src={dice} width={"50px"} height={"50px"}  />
                    <Heading fontSize={'2xl'} pl='2' children='Play' />
                    </Button>
                  </Link>
              </Box>
              {user?(
              <>
              <Box w='99%' bg={'white'} >
                  <Link onClick={onClose} to={'/profile'} >
                    <Button w='100%' bg={'white'} >
                    <Image src={dice} width={"50px"} height={"50px"}  />
                    <Heading fontSize={'2xl'} pl='2' children='Profile' />
                    </Button>
                  </Link>
              </Box>
              <Box w='99%' bg={'white'} >
                  <Link onClick={onClose} to={'/wallet'} >
                    <Button w='100%' bg={'white'} >
                    <Image src={dice} width={"50px"} height={"50px"}  />
                    <Heading fontSize={'2xl'} pl='2' children='Wallet' />
                    </Button>
                  </Link>
              </Box>
              <Box w='99%' bg={'white'} >
                  <Link onClick={onClose} to={'/payment'} >
                    <Button w='100%' bg={'white'} >
                    <Image src={dice} width={"50px"} height={"50px"}  />
                    <Heading fontSize={'2xl'} pl='2' children='Payment' />
                    </Button>
                  </Link>
              </Box>
              </>):(<>
                <Box w='99%' bg={'white'} >
                  <Link onClick={onClose} to={'/register'} >
                    <Button w='100%' bg={'white'} >
                    <Image src={dice} width={"50px"} height={"50px"}  />
                    <Heading fontSize={'2xl'} pl='2' children='Register' />
                    </Button>
                  </Link>
              </Box>
              </>)}
              <Box w='99%' bg={'white'} >
                  <Link onClick={onClose} to={'/Support'} >
                    <Button w='100%' bg={'white'} >
                    <Image src={dice} width={"50px"} height={"50px"}  />
                    <Heading fontSize={'2xl'} pl='2' children='Support' />
                    </Button>
                  </Link>
              </Box>
              <Box w='99%' bg={'white'} >
                  <Link onClick={onClose} to={'/terms-of-service'} >
                    <Button w='100%' bg={'white'} >
                    <Image src={dice} width={"50px"} height={"50px"}  />
                    <Heading fontSize={'2xl'} pl='2' children='Legal terms' />
                    </Button>
                  </Link>
              </Box>
              <HStack justifyContent={"space-evenly"} position={"absolute"} bottom={"2rem"} width={"80%"}>
                {isAuthenticated?(
                <>
                <VStack>
                  <HStack>
                  <Link onClick={onClose} to={"/profile"} >
                    <Button bg={'black'} color={'white'}>Profile</Button>
                  </Link>
                  <Button colorScheme={"yellow"} onClick={logouthandler} > <RiLogoutBoxLine/> Logout</Button>
                  </HStack>
                  {user && user.role==="admin" && <Link onClick={onClose} to={"/admin/dashboard"} >
                    <Button bg={'black'} color={'white'}><RiDatabaseFill style={{margin:"4px"}}/> Dashboard</Button>
                  </Link>}
                </VStack>
                </>):(
                <>
                  <Link onClick={onClose} to={"/login"} >
                    <Button bg={'black'} color={'white'} >Login</Button>
                  </Link>
                </>)}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header