import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Link,
  } from '@chakra-ui/react';
  
  export default function WithBackgroundImage() {
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
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Somos uma assessoria de contabilidade completa a serviço do seu negócio.
            </Text>
            <Text
              color={'green.300'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Economize até 50% com a sua contabilidade.
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