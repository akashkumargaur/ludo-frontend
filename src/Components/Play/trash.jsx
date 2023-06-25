import React from 'react'

const trash = () => {
  return (
    <VStack border='2px'  borderRadius='lg' borderColor='#B5B5B5' color='black'  width={'80%'} mt='2rem' mx='10%' >
                  <Box w='100%' fontFamily={['Poppins,sans-serif']} px='0' mx='0' >
                    <Box borderBottom='2px' borderColor='#D2D2D2' bg='#F8F9FA' >
                      <Text pl='4%'  py='2' fontFamily={['Poppins,sans-serif']} fontSize={['lg','2xl']} fontWeight={'bold'} > Currently Playing: Count  </Text>
                    </Box>
                    <Flex>
                      <Square p='4'>
                        <Image   src={play} alt='logo' />
                        <Text pl='2%' color={'black'} children='₹30' />
                      </Square>
                      <Spacer />
                      <Box p='4' >
                    <Button value={30} onClick={handleplay} colorScheme='blue'>Play</Button>
                      </Box>
                    </Flex>
                  </Box>     
              </VStack>
  )
}

export default trash