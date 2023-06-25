import { Button,Image } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import menu from "../../Assests/Menu1.svg"
import logo from "../../Assests/logo1.png"

const Logo = () => {
  return (
    <>
      {/* <Button colorScheme={"red"} width={"12"} height={"12"} backgroundImage={menu} position={"fixed"} top={"6"} left={2}   onClick={onOpen}>
        <RiMenu5Fill/>
      </Button> */}
      <Image  width={"500"} height={"500"} src={logo} position={"fixed"} top={"6"} left={2}/>
    </>
  )
}

export default Logo