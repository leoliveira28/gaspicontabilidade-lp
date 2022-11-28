import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    HStack,
  
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
  export default function WithBackgroundImage() {
  
  const [triggerOne, setTriggerOne] = useState(false)
  const [triggerTwo, setTriggerTwo] = useState(false)
  const [triggerThree, setTriggerThree] = useState(false)
  const [triggerEffect, setTriggerEffect] = useState(false)

  
  useEffect(() => {
    setTimeout(() => {
      setTriggerEffect(!triggerEffect)
      }, 2000)
  },[triggerEffect])
    
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={'url(https://maisempresas.net.br/wp-content/uploads/2022/07/cropped-balance-865091_1920.jpg)'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          align={'flex-start'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'}  spacing={5}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Somos uma assessoria de contabilidade completa a serviço do seu negócio.
            </Text>
            <HStack>
            <Text
            position={'absolute'}
            color={'gray.200'}
            transition={'all 0.2s ease-in-out'}
            opacity="0"

            >
              texto um
            </Text>
            <Text
            transition={'all 0.2s ease-in-out'}
            position={'absolute'}
           color={'gray.200'}
            opacity="0"

           >
              texto dois
            </Text>
            <Text
         transition={'all 0.3s ease-in-out'}
            position={'absolute'}
            color={'gray.200'}
             opacity="0"
            >
              texto tres
            </Text>
            </HStack>
            <Text
              color={'green.300'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Economize até 50% em honorários.
            </Text>
            <Text
              color={'white'}
              fontWeight={300}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}>
              Fazemos a transferência da sua contabilidade sem complicações.
            </Text>
            <Stack direction={'row'}>
              <Button as='a' href='#contact'
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Simulador de impostos
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }